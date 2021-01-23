import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, City, timeZone } from '../redux/store'

export const useDate = () => {
  const [date1, setDate1] = useState(new Date())
  const [date2, setDate2] = useState(new Date())

  const city1 = useSelector<RootState, City>((state) => state.firstClock)
  const city2 = useSelector<RootState, City>((state) => state.secondClock)

  useEffect(() => {
    const interval1 = setInterval(() => setDate1(new Date()), 1000)
    const interval2 = setInterval(() => setDate2(new Date()), 1000)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [])

  const firstDate = getLocalTime(date1, city1)
  const secondDate = getLocalTime(date2, city2)

  return [firstDate, secondDate]
}

const getLocalTime = (date: Date, city: City) => {
  if (city === 0) return date

  const localString = date.toLocaleString('ru-RU', {
    timeZone: timeZone[city],
  })

  const [localDate, localTime] = localString.split(', ')

  const localDateTime =
    localDate.split('.').reverse().join('-') + 'T' + localTime

  return new Date(localDateTime)
}
