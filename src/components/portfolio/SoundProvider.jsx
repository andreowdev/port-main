import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

const SOUND_STORAGE_KEY = "andreo@sounds-enabled";
const MASTER_VOLUME = 1;
const SoundContext = createContext(null);

let audioContext = null;
let audioUnlocked = false;

function ensureAudioContext() {
  if (typeof window === "undefined" || !audioUnlocked) {
    return null;
  }

  if (!audioContext) {
    const Context = window.AudioContext || window.webkitAudioContext;

    if (!Context) {
      return null;
    }

    audioContext = new Context();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function unlockAudio() {
  if (typeof window === "undefined") {
    return;
  }

  audioUnlocked = true;
  ensureAudioContext();
}

function readSoundPreference() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.localStorage.getItem(SOUND_STORAGE_KEY) !== "false";
}

function playHoverSound() {
  if (!readSoundPreference()) {
    return;
  }

  const context = ensureAudioContext();

  if (!context) {
    return;
  }

  try {
    const now = context.currentTime;
    const baseTone = context.createOscillator();
    const harmonicTone = context.createOscillator();
    const baseEnvelope = context.createGain();
    const harmonicEnvelope = context.createGain();
    const masterEnvelope = context.createGain();

    baseTone.type = "sine";
    baseTone.frequency.value = 800;
    harmonicTone.type = "sine";
    harmonicTone.frequency.value = 1600;

    baseEnvelope.gain.setValueAtTime(0.06, now);
    baseEnvelope.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    harmonicEnvelope.gain.setValueAtTime(0.02, now);
    harmonicEnvelope.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    masterEnvelope.gain.value = MASTER_VOLUME;

    baseTone.connect(baseEnvelope).connect(masterEnvelope).connect(context.destination);
    harmonicTone.connect(harmonicEnvelope).connect(masterEnvelope);

    baseTone.start(now);
    harmonicTone.start(now);
    baseTone.stop(now + 0.07);
    harmonicTone.stop(now + 0.05);
  } catch {
    return;
  }
}

function playClickSound() {
  if (!readSoundPreference()) {
    return;
  }

  const context = ensureAudioContext();

  if (!context) {
    return;
  }

  try {
    const now = context.currentTime;
    const offset = 0.08;
    const masterEnvelope = context.createGain();

    masterEnvelope.gain.value = MASTER_VOLUME;
    masterEnvelope.connect(context.destination);

    const triggerPulse = (startTime, frequency, amplitude) => {
      const noiseSource = context.createBufferSource();
      const noiseBuffer = context.createBuffer(1, context.sampleRate * 0.01, context.sampleRate);
      const samples = noiseBuffer.getChannelData(0);

      for (let index = 0; index < samples.length; index += 1) {
        samples[index] = (Math.random() * 2 - 1) * Math.exp(-index / 40);
      }

      noiseSource.buffer = noiseBuffer;

      const bandPass = context.createBiquadFilter();
      bandPass.type = "bandpass";
      bandPass.frequency.value = frequency;
      bandPass.Q.value = 2.5;

      const pulseEnvelope = context.createGain();
      pulseEnvelope.gain.setValueAtTime(amplitude, startTime);
      pulseEnvelope.gain.exponentialRampToValueAtTime(0.001, startTime + 0.012);

      noiseSource.connect(bandPass).connect(pulseEnvelope).connect(masterEnvelope);
      noiseSource.start(startTime);
    };

    triggerPulse(now, 4500, 0.35);
    triggerPulse(now + offset, 5500, 0.25);
  } catch {
    return;
  }
}

function playMascotSound() {
  if (!readSoundPreference()) {
    return;
  }

  const context = ensureAudioContext();

  if (!context) {
    return;
  }

  try {
    const now = context.currentTime;
    const endAt = now + 0.28;
    const oscillator = context.createOscillator();
    const overtone = context.createOscillator();
    const bandPass = context.createBiquadFilter();
    const envelope = context.createGain();

    oscillator.type = "sawtooth";
    overtone.type = "sine";

    oscillator.frequency.setValueAtTime(360, now);
    oscillator.frequency.exponentialRampToValueAtTime(760, now + 0.08);
    oscillator.frequency.exponentialRampToValueAtTime(310, endAt);

    overtone.frequency.setValueAtTime(540, now);
    overtone.frequency.exponentialRampToValueAtTime(1020, now + 0.08);
    overtone.frequency.exponentialRampToValueAtTime(430, endAt);

    bandPass.type = "bandpass";
    bandPass.Q.value = 1.8;
    bandPass.frequency.setValueAtTime(1200, now);
    bandPass.frequency.linearRampToValueAtTime(2400, now + 0.08);
    bandPass.frequency.linearRampToValueAtTime(900, endAt);

    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(0.11, now + 0.02);
    envelope.gain.exponentialRampToValueAtTime(0.001, endAt);

    oscillator.connect(bandPass);
    overtone.connect(bandPass);
    bandPass.connect(envelope).connect(context.destination);

    oscillator.start(now);
    overtone.start(now);
    oscillator.stop(endAt);
    overtone.stop(endAt);
  } catch {
    return;
  }
}

export function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(() => readSoundPreference());
  const lastHoverTargetRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(SOUND_STORAGE_KEY, String(enabled));
  }, [enabled]);

  useEffect(() => {
    const interactiveSelector = [
      "a[href]",
      "button",
      "[role='button']",
      "input[type='button']",
      "input[type='submit']",
      "summary",
      "[data-sound='click']",
    ].join(", ");

    const handleUnlock = () => {
      unlockAudio();
    };

    const handleClick = (event) => {
      if (!enabled || !(event.target instanceof Element)) {
        return;
      }

      const target = event.target.closest(interactiveSelector);

      if (target) {
        playClickSound();
      }
    };

    const handleHover = (event) => {
      if (!enabled || !(event.target instanceof Element)) {
        return;
      }

      const target = event.target.closest(interactiveSelector);

      if (!target) {
        lastHoverTargetRef.current = null;
        return;
      }

      if (target === lastHoverTargetRef.current) {
        return;
      }

      lastHoverTargetRef.current = target;
      playHoverSound();
    };

    document.addEventListener("pointerdown", handleUnlock, { passive: true });
    document.addEventListener("keydown", handleUnlock);
    document.addEventListener("click", handleClick);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("focusin", handleHover);

    return () => {
      document.removeEventListener("pointerdown", handleUnlock);
      document.removeEventListener("keydown", handleUnlock);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("focusin", handleHover);
    };
  }, [enabled]);

  const value = useMemo(
    () => ({
      enabled,
      toggleEnabled: () => {
        setEnabled((previous) => {
          const next = !previous;

          if (next) {
            unlockAudio();
          }

          return next;
        });
      },
      playHover: playHoverSound,
      playClick: playClickSound,
      playMascot: playMascotSound,
      unlockAudio,
    }),
    [enabled],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

SoundProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSound() {
  const context = useContext(SoundContext);

  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }

  return context;
}
