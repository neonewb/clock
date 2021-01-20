import { nanoid } from 'nanoid'
import React, { FC } from 'react'
import { City, RootState, selectCity } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
  num: number
}

export const SelectCity: FC<Props> = ({ num }) => {
  const clock = num === 1 ? 'firstClock' : 'secondClock'

  const city = useSelector<RootState, City>((state) => state[clock])
  const dispatch = useDispatch()

  const changeCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectCity({ city: +event.target.value, clock }))
  }

  const options = Object.keys(City).map((c) => {
    const key = nanoid()
    if (!isNaN(Number(c))) {
      return (
        <option key={key} value={+c} className='selectCity__option'>
          {City[+c]}
        </option>
      )
    }
  })

  return (
    <select value={city} className='selectCity' onChange={changeCity}>
      {options}
    </select>
  )
}
