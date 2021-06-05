import { createMuiTheme } from '@material-ui/core/styles'

const MaterialUiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#C54582',
    },
    secondary: {
      main: '#F4DCF4',
    },
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: '#FFF',
        '&:hover': {
          backgroundColor: '#FFF',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: '#FFF',
          },
        },
        '&.Mui-focused': {
          backgroundColor: '#FFF',
        },
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: 'F4DCF4',
        },
      },
    },
  },
})

export default MaterialUiTheme
