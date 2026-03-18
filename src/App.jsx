import Route from "./rotas/routes";
import { SoundProvider } from "./components/portfolio/SoundProvider.jsx";
import "./context/style.css";

export default function App() {
  return (
    <SoundProvider>
      <Route />
    </SoundProvider>
  );
}
