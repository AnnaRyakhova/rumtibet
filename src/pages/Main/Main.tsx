import { FirstScreen } from '../../components/FirstScreen/FirstScreen'
import { Offer } from '../../components/Offer/Offer'
import { About } from '../../components/About/About'
import { Directions } from '../../components/Directions/Directions'
import { Blog } from '../../components/Blog/Blog'
import { Photos } from '../../components/Photos/Photos'
import { Form } from '../../components/Form/Form'

export const Main = () => {
  return (
    <>
      <FirstScreen />
      <About />
      <Offer />
      <Directions />
      <Blog />
      <Photos />
      <Form />
    </>
  )
}
