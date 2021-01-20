import React, { FC } from 'react'

type Props = {
  name: string
  number?: number
  angle?: number
  length?: number
  width?: number
}

export const Mark: FC<Props> = ({
  angle = 0,
  length = 5,
  name,
  width = 1,
  number,
}) => {
  return (
    <div
      className={`clock__mark clock__${name}-mark`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}>
      <div
        className={`clock__mark__body clock__${name}-mark__body`}
        style={{
          width: `${width}px`,
          top: 0,
          bottom: `${100 - length / 2}%`,
        }}
      />
      {number && (
        <div
          className='clock__mark__number'
          style={{
            transform: `rotate(-${angle}deg)`,
            top: `${length / 2}%`,
          }}>
          {number}
        </div>
      )}
    </div>
  )
}
