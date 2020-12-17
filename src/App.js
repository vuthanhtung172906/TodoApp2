import React,{useState} from "react"
import Form from "./component/Form"
import List from "./component/List"
function App(){
  const [state, setState] = useState({
    todos: [
      {
        title: "To do App"
      },
      {
        title: "Store Cart"
      },
      {
        title: "Tung bo doi qua 3"
      },
      {
        title: "Tung bo doi qua 4"
      },
      {
        title: "Tung bo doi qua 5"
      }

    ]
    })
    const addItem = item =>{
      const newTitle ={
        title: item
      }
      setState({
        todos: [...state.todos, newTitle]
      })
    }
    const deleteItem = index =>{
      setState({
        todos: [
          ...state.todos.filter((todo , i )=>{
            return i !== index;
          })
        ]
      })
    }
    return(
      <div className="app">
        <Form addTodo = {addItem}/>
        <h1>To do list</h1>
        <List list = {state.todos}
              onDelete = {deleteItem}
        />
      </div>
    )
  }


export default App;
