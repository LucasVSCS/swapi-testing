import '@fontsource/roboto'
import { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import MainPageStyle from './styles/MainPageStyle'
import CalculatorForm from './components/CalculatorForm'
import StarshipContainer from './components/StarshipContainer'
import { getAllStarshipsData } from './apis/starships-api'

function App () {
  const classes = MainPageStyle()
  const [loading, setLoading] = useState(false)
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await getAllStarshipsData()

      setStarships(result)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      <Container maxWidth='xs'>
        <CssBaseline />
        <CalculatorForm />
      </Container>
      <Container maxWidth='lg' className={classes.dataContainer}>
        <StarshipContainer starships={starships} isLoading={loading} />
      </Container>
    </div>
  )
}

export default App
