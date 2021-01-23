import { nanoid } from 'nanoid'
import React, { FC } from 'react'
import { City, cityRu, ClockEnum, RootState, selectCity } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
  clock: ClockEnum
}

export const SelectCity: FC<Props> = ({ clock }) => {
  const city = useSelector<RootState, City>((state) => state[clock])

  const dispatch = useDispatch()

  const changeCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectCity({ city: +event.target.value, clock }))
  }

  const options = Object.keys(City).map((c) => {
    const key = nanoid()
    if (!isNaN(Number(c))) {
      const hidden = +c === 0 ? true : false
      return (
        <option
          hidden={hidden}
          key={key}
          value={+c}
          className='selectCity__option'>
          {cityRu[+c]}
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
