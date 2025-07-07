import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from './TodoList'
import { TodoItem } from '../TodoItem'


const mockTodoList = [
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

test('renders todo text', () => {
  render(
  <TodoList>
    { mockTodoList.map((todo) => <TodoItem key={todo.id} onClick={()=>{}} isDone={todo.isDone} text={todo.text} />) }
  </TodoList>)

  expect(screen.getByText('купить продукты')).toBeInTheDocument()
  expect(screen.getByText('написать сценарий')).toBeInTheDocument()
})