import './App.css';
import { Offer } from '../Offer/Offer';
import { FirstScreen } from '../FirstScreen/FirstScreen';
import { Header } from '../Header/Header';
import { Directions } from '../Directions/Directions';

export const App = () => (
  <>
    <Header />
    <FirstScreen />
    <Offer />
    <Directions />
  </>
)
