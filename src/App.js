import React,{useState ,useEffect} from "react"
import Form from "./component/Form"
import List from "./component/List"
function App(){
  const [state, setState] = useState({
    todos: [
      
    ]
    })
    const addItem = item =>{
        setState({
          todos: [...state.todos, item]
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
    const saveItemEdit = (value , key)=>{
        state.todos.forEach((item , i) => {
          console.log(key);
          console.log(i);
          if(i === key){
            item.todo = value;
          }
        });
        console.log(state.todos)
        setState({todos: state.todos});
    }

    useEffect(()=>{
      console.log("Component did mount ")
      const dataStore = JSON.parse(localStorage.getItem('dataStore'));
      if(dataStore !== null){
        setState({todos: dataStore})
      }
    },[]);
    useEffect(()=>{
      console.log("Component did update")
      localStorage.setItem('dataStore' , JSON.stringify(state.todos))
    });
    return(
      <div className="app">
        <Form addTodo = {addItem}/>
        <h1>To do list</h1>
        {(state.todos.length === 0) ? <h2>Noting to do </h2> :         
        <List list = {state.todos}
              onDelete = {deleteItem}
              saveItemEdit= {saveItemEdit}
              count = {state.todos.length}
        />}

      </div>
    )
  }


export default App;
