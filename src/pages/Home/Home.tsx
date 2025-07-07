import React from 'react'
import styles from './Home.module.css'

import { Block } from '../../components/Block'
import { Container } from '../../components/Container'
import { TodoList } from '../../components/TodoList'
import { TodoItem } from '../../components/TodoItem'

import { type ITodo } from '../../models/ITodo'
// import todosJson from '../../todos.json'


const Home = () => {
  
  // states
  const [todos, setTodos] = React.useState<ITodo[]>(
    [
      {
          id: 1,
          text: "купить продукты",
          isDone: false
      },
      {
          id: 2,
          text: "написать сценарий",
          isDone: false
      }
    ]
  )
  const [filter, setFilter] = React.useState<string>('all')
  const [newTodoText, setNewTodoText] = React.useState<string>('')

  // effects

  // handlers
  const toggleDone = (id: number) => {
    setTodos(
      todos.map(todo=>{
        return todo.id === id ? {...todo, isDone: !todo.isDone} : todo
      })
    )
  }
  const clearListHandler = () => {
    setTodos(
      todos.filter(todo=>{
        return !todo.isDone
      })
    )
  }
  const inputNewTodoChangeHandler = (text: string) => {
    setNewTodoText(text)
  }
  const createNewHandler = () => {

    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      isDone: false,
    }

    setTodos([...todos, newTodo])
    setNewTodoText('')
  }

  // render
  return (
    <Block height={'100vh'} bcolor='#121212'>
      <Container width={'default'}>

        <h1 className={styles.title}>My todos:</h1>

        <div className={styles.newTaskContainer}>
          <input value={newTodoText} onChange={(e)=>inputNewTodoChangeHandler(e.target.value)} className={styles.newTaskInput} type="text" placeholder='Новое задание' />
          <button className={styles.buttonCreate} onClick={createNewHandler}>Создать</button>
        </div>

        <TodoList size='standard'>

          {
            filter === 'all' &&
            todos.map((todo: ITodo) => 
              <TodoItem
                key={todo.id} // не использовать id для key
                text={todo.text}
                isDone={todo.isDone}
                onClick={()=>toggleDone(todo.id)}
              />
            )
          }
          {
            filter === 'done' &&
            todos.map((todo: ITodo) => 
              todo.isDone && <TodoItem
                key={todo.id} // не использовать id для key
                text={todo.text}
                isDone={todo.isDone}
                onClick={()=>toggleDone(todo.id)}
              />
            )
          }
          {
            filter === 'process' &&
            todos.map((todo: ITodo) => 
              !todo.isDone && <TodoItem
                key={todo.id} // не использовать id для key
                text={todo.text}
                isDone={todo.isDone}
                onClick={()=>toggleDone(todo.id)}
              />
            )
          }

        </TodoList>

        <div className={styles.infoPanel}>
              
          <p>Всего задач: { todos.length }</p>
          
          <div className={styles.filterContainer}>
            <a className={styles.filterButton} style={{color: filter === 'all' ? 'white' : '#969696'}} onClick={()=>setFilter('all')}>все</a>
            <a className={styles.filterButton} style={{color: filter === 'done' ? 'white' : '#969696'}} onClick={()=>setFilter('done')}>завершено</a>
            <a className={styles.filterButton} style={{color: filter === 'process' ? 'white' : '#969696'}} onClick={()=>setFilter('process')}>в процессе</a>
          </div>
          
          <button
            style={{backgroundColor: '#363636', fontSize: 14}}
            onClick={clearListHandler}
            >
              Очистить завершенное
            </button>
    
        </div>

      </Container>
    </Block>
  )
}

export default Home