import React from 'react'
import styles from './TodoItem.module.css'


interface TodoItemProps {
  text: string
  isDone?: boolean
  onClick: ()=>void
}

const TodoItem = ({ text, isDone=false, onClick } : TodoItemProps) => {
  return (
    <div
      className={styles.box}
      style={{ opacity: isDone ? .3 : 1 }}
      onClick={onClick}
    >
      <div className={styles.completingCircle}>
        { isDone && <div className={styles.doneCap} /> }
      </div>
      <p className={styles.taskText}>{ text }</p>
    </div>
  )
}

export default TodoItem