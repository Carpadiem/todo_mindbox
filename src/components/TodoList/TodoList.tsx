import React from 'react'



interface TodoListProps {
  children: React.ReactNode
}

const TodoList = ({ children }: TodoListProps) => {
  return (
    <div
      style={{
        padding: '20px 20px',
        border: '1px solid #242424',
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        gap: 5
      } as React.CSSProperties}
    >
      { children }
    </div>
  )
}

export default TodoList