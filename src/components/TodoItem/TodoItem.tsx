import React from 'react'
import styles from './TodoItem.module.css'


interface TodoItemProps {
  taskText: string
}

const TodoItem = ({ taskText } : TodoItemProps) => {
  return (
    <div
      className={styles.box}
      style={{
        padding: '10px 20px',
        backgroundColor: '#1d1d1d',
        borderRadius: 6,
      } as React.CSSProperties}
    >
      <p className={styles.taskText}>{ taskText }</p>
    </div>
  )
}

export default TodoItem