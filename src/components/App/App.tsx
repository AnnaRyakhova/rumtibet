import './App.css';
import { Offer } from '../Offer/Offer';
import { About } from '../About/About';
import { FirstScreen } from '../FirstScreen/FirstScreen';
import { Header } from '../Header/Header';
import { About } from '../About/About';

export const App = () => (
  <>
    <Header />
    <FirstScreen />
    <About />
    <Offer />
  </>
)
