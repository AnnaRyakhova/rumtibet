import './App.css'
import { Offer } from '../Offer/Offer'
import { FirstScreen } from '../FirstScreen/FirstScreen'
import { Header } from '../Header/Header'
import { About } from '../About/About'
import { Directions } from '../Directions/Directions'
import { Blog } from '../Blog/Blog'
import { Photos } from '../Photos/Photos'
import { Form } from '../Form/Form'
import { Footer } from '../Footer/Footer'

export const App = () => (
  <>
    <Header />
    <FirstScreen />
    <About />
    <Offer />
    <Directions />
    <Blog />
    <Photos />
    <Form />
    <Footer />
  </>
)
