import React from 'react'
import { useSelector } from 'react-redux'
import { Clock } from './components/Clock'
import { SelectCity } from './components/SelectCity'
import { useDate } from './hooks/useDate'
import { RootState, City } from './redux/store'

function App() {
  const firstCity = useSelector<RootState, City>((state) => state.firstClock)
  const secondCity = useSelector<RootState, City>((state) => state.secondClock)

  const date = useDate()

  return (
    <div className='mainWrapper'>
      <div className='wrapper'>
        <Clock date={date} />
        <div className='timeString'>{date.toLocaleTimeString()}</div>
        <SelectCity num={1} />
      </div>

      <div className='wrapper'>
        <Clock date={date} />
        <div className='timeString'>{date.toLocaleTimeString()}</div>
        <SelectCity num={2} />
      </div>
    </div>
  )
}

export default App
