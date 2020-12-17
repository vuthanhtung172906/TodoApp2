import React from "react"
import Form from "./component/Form"
import List from "./component/List"
class App extends React.Component{
  state = {
    todos: [
      {
        id: 0,
        title: "To do App"
      },
      {
        id: 1,
        title: "Store Cart"
      },
      {
        id: 2,
        title: "Tung bo doi qua 3"
      },
      {
        id: 3,
        title: "Tung bo doi qua 4"
      },
      {
        id: 4,
        title: "Tung bo doi qua 5"
      }

    ]
  }
  render(){
    return(
      <div className="app">
        <Form/>
        <h1>To do list</h1>
        <List list = {this.state.todos}/>
      </div>
    )
  }
}

export default App;
