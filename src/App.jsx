import './App.css';
import NavbarOne from '../components/navbar-first/navbar-first';
import NavbarSeconde from '../components/navbar-seconde/navbar-seconde';
import Story from "../components/story-box/story";
import Slider from "../components/slider/slider";
import IconBox from "../components/icon-box/icon";
import Offer from '../components/Amazing-offer/Amazing-offer';

function App() {
  return (
    <div>
      <NavbarOne />
      <NavbarSeconde /><br />
      <Story /><br />
      <Slider /><br />
      <IconBox /><br />
      <Offer />
    </div>
  );
}

export default App;

