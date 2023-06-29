import Chart_fill from '../../assets/Chart_fill.png';
import Chat from '../../assets/Chat.png';
import User from '../../assets/User.png';
import Calendar from '../../assets/Calendar.png';
import Search from '../../assets/Search.png';
import Chart from '../../assets/Chart.png';
// import Folder from '../../assets/Folder.png';
import Setting from '../../assets/Setting.png';

export const MenuItens = [
  { title: "Home", src: Chart_fill, path: "/" },
  { title: "Itens de Configuração", src: User, gap: true, path: "/configurationItems" },
  { title: "Eventos ", src: Calendar, path: "/events" },
  { title: "Incidentes", src: Search, path: "/incidents" },
  { title: "Soluções", src: Chart, path: "/solutions" },
  { title: "Relatórios", src: Chat, path: "/reports" },
  { title: "Sobre", src: Setting, gap: true ,path: "/about" },
];