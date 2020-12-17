import React from "react"

class Form extends React.Component{
    render(){
        return(
          <form>
              <input type="text"  required/>
              <button type="submit">Create</button>
          </form>
        )
    }
}

export default Form