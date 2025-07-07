import React from 'react'
import styles from './Home.module.css'

import { Block } from '../../components/Block'
import { Container } from '../../components/Container'
import { TodoList } from '../../components/TodoList'
import { TodoItem } from '../../components/TodoItem'


const Home = () => {
  
  // states

  // handlers
  

  // render
  return (
    <Block height={'100vh'} bcolor='#121212'>
      <Container width={'default'}>

        <h1 className={styles.title}>My todos:</h1>
        
        <div className={styles.newTaskContainer}>
          <input className={styles.newTaskInput} type="text" placeholder='Новое задание' />
          <button className={styles.buttonCreate} >Создать</button>
        </div>

        <TodoList>
          <TodoItem taskText='new task' />
          <TodoItem taskText='hello world' />
        </TodoList>

      </Container>
    </Block>
  )
}

export default Home