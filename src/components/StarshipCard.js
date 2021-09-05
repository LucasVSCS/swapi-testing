import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default function StarshipCard (props) {
  return (
    <Card>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          🚀 {props.starshipName}
        </Typography>
        <Typography>Necessary stops: {props.stopCount ? props.stopCount : 'N/A'}</Typography>
      </CardContent>
    </Card>
  )
}
