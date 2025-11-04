import {createContext, useState, useCallback} from 'react'
// this is super important and the value you share with every consumer component
// thats why it is exported as default
const TodosContext = createContext()

const Provider = ({children}) => {
  const [todos, setTodos] = useState([])

  const fetchTodos = useCallback(() => {
    try {
      const stored = window.localStorage.getItem('todos')
      const parsed = stored ? JSON.parse(stored) : []
      setTodos(Array.isArray(parsed) ? parsed : [])
    } catch (e) {
      setTodos([])
    }
  }, [])
  // this is super clear but not how you will see it in production
  // const stableFetchTodos = useCallback(fetchTodos, [])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
    }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    try {
      window.localStorage.setItem('todos', JSON.stringify(updatedTodos))
    } catch (e) {}
  }

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
    try {
      window.localStorage.setItem('todos', JSON.stringify(updatedTodos))
    } catch (e) {}
  }

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle,
        }
      }
      return todo
    })
    setTodos(updatedTodos)
    try {
      window.localStorage.setItem('todos', JSON.stringify(updatedTodos))
    } catch (e) {}
  }

  const valuesToShare = {
    todos,
    fetchTodos,
    createTodo,
    deleteTodoById,
    editTodoById,
  }

  return (
    <TodosContext.Provider value={valuesToShare}>
      {children}
    </TodosContext.Provider>
  )
}

export {Provider}
export default TodosContext
