import gitBg from "../img/github/28e6e16b4eee580edadfc42452bc9d74.gif";
import './Github.css';

export default function Github() {
  return (
    <div className="relative flex flex-col rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110">
      <a href="" className="relative block">
        <img src={gitBg} alt="GitHub Background" className="w-full h-52 object-cover rounded-lg" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 rounded-lg">
          <span className="text-highlight text-3xl font-bold mb-5 font-sans glow">Github</span>
          <span className="text-highlight font-bold text-xl glow">Veja Meus Projetos e Contribuições</span>
        </div>
      </a>
    </div>
  );
}
