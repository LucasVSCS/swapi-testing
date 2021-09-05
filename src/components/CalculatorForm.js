import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import MainPageStyle from '../styles/MainPageStyle'

export default function CalculatorForm (props) {
  const classes = MainPageStyle()

  return (
    <div className={classes.paper}>
      <Typography variant='h5' component='h2'>
        Starships MGL travel Calculator
      </Typography>
      <TextField
        type='number'
        variant='outlined'
        margin='normal'
        fullWidth
        id='distance'
        label='Distance in MGL'
        autoFocus
        onChange={e => props.setDistance(e.target.value)}
      />
    </div>
  )
}
