import React, { FC } from 'react'
import { Hand } from './Hand'
import { Mark } from './Mark'

type Props = {
  date: Date
}

export const Clock: FC<Props> = ({ date }) => {
  return (
    <time className='clock' dateTime={date.toISOString()}>
      {renderFace()}
      {renderHourHand(date)}
      {renderMinuteHand(date)}
      {renderSecondHand(date)}
    </time>
  )
}

function renderFace() {
  return (
    <div className='clock__face'>
      {renderMinuteMarks()}
      {renderHourMarks()}
    </div>
  )
}

function renderMinuteMarks() {
  const minuteMarks = []
  for (let i = 1; i <= 60; i += 1) {
    const isHourMark = !(i % 5)

    if (!isHourMark) {
      minuteMarks.push(<Mark key={`minute_${i}`} angle={i * 6} name='minute' />)
    }
  }
  return minuteMarks
}

function renderHourMarks() {
  const hourMarks = []
  for (let i = 1; i <= 12; i += 1) {
    hourMarks.push(
      <Mark
        key={`hour_${i}`}
        angle={i * 30}
        name='hour'
        number={i}
        width={2}
        length={10}
      />
    )
  }
  return hourMarks
}

function renderHourHand(date: Date) {
  const angle =
    date.getHours() * 30 + date.getMinutes() / 2 + date.getSeconds() / 600

  return (
    <Hand angle={angle} length={40} name='hour' oppositeLength={4} width={4} />
  )
}

function renderMinuteHand(date: Date) {
  const angle =
    date.getHours() * 360 + date.getMinutes() * 6 + date.getSeconds() / 10

  return (
    <Hand
      angle={angle}
      name='minute'
      length={80}
      oppositeLength={8}
      width={2}
    />
  )
}

function renderSecondHand(date: Date) {
  const angle = date.getMinutes() * 360 + date.getSeconds() * 6

  return (
    <Hand
      angle={angle}
      name='second'
      length={85}
      oppositeLength={9}
      width={1}
    />
  )
}
