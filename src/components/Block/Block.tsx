import React from 'react'


interface BlockProps {
  children: React.ReactNode
  height?: number | string
  bcolor?: string
}

const Block = ({ children, height=550, bcolor='#000' }: BlockProps) => {
  return (
    <div
      style={{
        height: height,
        backgroundColor: bcolor,
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
      } as React.CSSProperties}
      >
      { children }
    </div>
  )
}

export default Block