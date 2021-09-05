import React from 'react'
import Grid from '@material-ui/core/Grid'
import StarshipCard from './StarshipCard'
import MainPageStyle from '../styles/MainPageStyle'
import { getTravelStopsQuantity } from '../apis/starships-api'

export default function StarshipContainer (props) {
  const classes = MainPageStyle()

  function returnStarships (data) {
    return data.map((item, index) => {
      return (
        <Grid item xs={3}>
          <StarshipCard
            key={index}
            starshipName={item.name}
            stopCount={getTravelStopsQuantity(item)}
          />
        </Grid>
      )
    })
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.isLoading ? (
          <div>Loading ...</div>
        ) : (
          returnStarships(props.starships)
        )}
      </Grid>
    </div>
  )
}
