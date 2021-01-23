import React from 'react'
import { Clock } from './components/Clock'
import { SelectCity } from './components/SelectCity'
import { useDate } from './hooks/useDate'
import { ClockEnum } from './redux/store'

function App() {
  const [date1, date2] = useDate()

  return (
    <div className='mainWrapper'>
      <div className='wrapper'>
        <Clock date={date1} />
        <div className='timeString'>{date1.toLocaleTimeString('ru-RU')}</div>
        <SelectCity clock={ClockEnum.First} />
      </div>

      <div className='wrapper'>
        <Clock date={date2} />
        <div className='timeString'>{date2.toLocaleTimeString('ru-RU')}</div>
        <SelectCity clock={ClockEnum.Second} />
      </div>
    </div>
  )
}

export default App
