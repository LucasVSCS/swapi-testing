import { makeStyles } from '@material-ui/core/styles'

const MainPageStyle = makeStyles(theme => ({
  dataContainer: {
    marginTop: theme.spacing(4)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    marginTop: theme.spacing(1)
  }
}))

export default MainPageStyle
