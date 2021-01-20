import React, { FC } from 'react'

type Props = {
  angle: number
  name: string
  length?: number
  oppositeLength?: number
  width?: number
}

export const Hand: FC<Props> = ({
  angle = 0,
  name,
  length = 100,
  oppositeLength = 10,
  width = 1,
}) => {
  return (
    <div
      className={`clock__hand clock__${name}-hand`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}>
      <div
        className={`clock__hand__body clock__${name}-hand__body`}
        style={{
          width: `${width}px`,
          top: `${50 - length / 2}%`,
          bottom: `${50 - oppositeLength / 2}%`,
        }}
      />
    </div>
  )
}
