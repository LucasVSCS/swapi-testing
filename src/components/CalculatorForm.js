import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MainPageStyle from '../styles/MainPageStyle'

export default function CalculatorForm () {
  const classes = MainPageStyle()

  return (
    <div className={classes.paper}>
      <Typography variant='h5' component='h2'>
        Starships MGL travel Calculator
      </Typography>
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='distance'
        label='Distance in MGL'
        name='distance'
        autoFocus
      />
      <Button
        fullWidth
        variant='contained'
        color='primary'
        className={classes.button}
      >
        Calculate
      </Button>
    </div>
  )
}
