import React from 'react'


interface ContainerProps {
  children: React.ReactNode
  width?: number | 'default'
}

const Container = ({ children, width='default' }: ContainerProps) => {
  return (
    <div
      style={{
        // backgroundColor: 'blue',
        width: width === 'default' ? 1200 : width,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      } as React.CSSProperties}
    >
      { children }
    </div>
  )
}

export default Container