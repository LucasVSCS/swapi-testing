import instance from './axios-config'

// Casting days, weeks, months and yers in hours
const DAY_IN_HOURS = 24
const WEEK_IN_HOURS = 168
const MONTH_IN_HOURS = 730
const YEAR_IN_HOURS = 8760
const API_URL = 'https://swapi.dev/api/starships/'

// Initial API query
async function queryData (queryUrl) {
  const response = await instance.get(queryUrl)
  return response.data
}

// Retrieve all valide starships to calculate their travel time
export async function getAllStarshipsData () {
  let currentData = await queryData(API_URL)
  let starshipsData = []

  while (currentData.next) {
    starshipsData = starshipsData.concat(currentData.results)

    currentData = await queryData(currentData.next)
  }

  starshipsData = starshipsData.concat(currentData.results)

  starshipsData = starshipsData.filter(item => {
    return item.MGLT !== 'unknown'
  })

  return starshipsData
}

// Calculate how many times should a starship stops to restock in a travel
export function getTravelStopsQuantity (starship, distance) {
  let travelHours
  let timeInHours

  travelHours = parseInt(distance / starship.MGLT)
  timeInHours = getTimeInHours(starship.consumables)

  return parseInt(travelHours / timeInHours)
}

// This function should convert a string based time in integer hours
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

  return parseInt(timeInHours)
}
