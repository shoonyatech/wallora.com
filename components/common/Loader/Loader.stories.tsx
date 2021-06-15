import Loader from '.'

export default {
  title: 'Loader',
  component: Loader,
}

const Template = () => Loader({ open: true, error: { message: 'Failed to fetch.' } })

export const Default = Template.bind({})
