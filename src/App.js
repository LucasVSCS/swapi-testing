import '@fontsource/roboto'
import { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import MainPageStyle from './styles/MainPageStyle'

import StarshipCard from './components/StarshipCard'
import CalculatorForm from './components/CalculatorForm'

import { getStarshipData } from './apis/starships-api'

function App () {
  const classes = MainPageStyle()
  const [loading, setLoading] = useState(false)
  const [shipData, setShipData] = useState({})

  useEffect(() => {
    getStarshipData('https://swapi.dev/api/starships/').then(() => {
      setShipData(JSON.parse(sessionStorage.getItem('starships')))
      console.log(shipData)
    })
  }, [])

  async function getData () {
	  
  }

  return (
    <div>
      <Container maxWidth='xs'>
        <CssBaseline />
        <CalculatorForm />
      </Container>
      <Container maxWidth='lg' className={classes.dataContainer}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <StarshipCard />
          </Grid>
          <Grid item xs={3}>
            <StarshipCard />
          </Grid>
          <Grid item xs={3}>
            <StarshipCard />
          </Grid>
          <Grid item xs={3}>
            <StarshipCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
