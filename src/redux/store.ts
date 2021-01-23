import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

export const timeZone = [
  undefined,
  'Asia/Vladivostok',
  'Europe/Kaliningrad',
  'Asia/Krasnoyarsk',
  'Europe/Moscow',
] as const

export enum City {
  'Select city',
  Vladivostok,
  Kaliningrad,
  Krasnoyarsk,
  Moscow,
}

export const cityRu = [
  'Выберите город',
  'Владивосток',
  'Калининград',
  'Красноярск',
  'Москва',
] as const

export enum ClockEnum {
  First = 'firstClock',
  Second = 'secondClock',
}

const initialState = {
  firstClock: City['Select city'] as City,
  secondClock: City['Select city'] as City,
}

const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    selectCity: (
      state,
      {
        payload,
      }: PayloadAction<{ city: City; clock: 'firstClock' | 'secondClock' }>
    ) => {
      state[payload.clock] = payload.city
    },
  },
})

export const { selectCity } = clockSlice.actions

export const store = configureStore({
  reducer: clockSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
