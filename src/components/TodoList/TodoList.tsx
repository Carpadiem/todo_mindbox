import React from 'react'
import styles from './TodoList.module.css'


interface TodoListProps {
  children: React.ReactNode
  size?: 'mini' | 'standard'
}

const TodoList = ({ size, children }: TodoListProps) => {
  
  // states
  const [isShowTasks, setIsShowTasks] = React.useState<boolean>(true)

  // effects

  // handlers
  const showhideTasksHandler = () => {
    setIsShowTasks(prev => !prev)
  }

  // render
  return (
    <>
    <div className={styles.list} style={{width: size === 'mini' ? 400 : 800}}>

      <a className={styles.showhideButton} onClick={showhideTasksHandler}>
        {isShowTasks ? 'Скрыть' : 'Показать'}
      </a>

      {isShowTasks ? children : null}
    </div>
    </>
  )
}

export default TodoList