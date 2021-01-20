import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

export enum City {
  Vladivostok,
  Kaliningrad,
  Krasnoyarsk,
  Moscow,
}

const initialState = {
  firstClock: City.Krasnoyarsk as City,
  secondClock: City.Moscow as City,
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
