import { Button } from './Button'
import './Button.module.css'

export default {
  title: 'button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'lala',
  size: 'normal',
}
