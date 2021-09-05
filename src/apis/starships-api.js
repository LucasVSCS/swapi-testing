import instance from './axios-config'

// Casting days, weeks, months and yers in hours
const DAY_IN_HOURS = 24
const WEEK_IN_HOURS = 168
const MONTH_IN_HOURS = 730
const YEAR_IN_HOURS = 8760

let starshipsData = []

export async function getStarshipData (apiUrl) {
  instance.get(apiUrl).then(response => {
    starshipsData = starshipsData.concat(response.data.results)

    if (response.data.next) {
      getStarshipData(response.data.next)
    } else {
      starshipsData = starshipsData.filter(item => {
        return item.MGLT !== 'unknown'
      })

      return sessionStorage.setItem('starships', JSON.stringify(starshipsData))
    }
  })
}

function getTravelStopsQuantity (starship) {
  const EXEMPLO_DISTANCIA = 1000000
  let travelHours
  let timeInHours

  travelHours = EXEMPLO_DISTANCIA / starship.MGLT
  timeInHours = getTimeInHours(starship.consumables)

  return parseInt(travelHours / timeInHours)
}

// Ta funcionando ok, arrumar pq ta feio
function getTimeInHours (timeString) {
  let timeType = timeString.split(' ')[1]
  let timeQuantity = timeString.split(' ')[0]
  let timeInHours

  if (timeType === 'days' || timeType === 'day') {
    timeInHours = timeQuantity * DAY_IN_HOURS
  } else if (timeType === 'weeks' || timeType === 'week') {
    timeInHours = timeQuantity * WEEK_IN_HOURS
  } else if (timeType === 'months' || timeType === 'month') {
    timeInHours = timeQuantity * MONTH_IN_HOURS
  } else if (timeType === 'years' || timeType === 'year') {
    timeInHours = timeQuantity * YEAR_IN_HOURS
  } else {
    timeInHours = timeQuantity
  }

  return timeInHours
}
