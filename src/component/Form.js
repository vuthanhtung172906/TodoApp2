import React,{useState} from "react"

function Form(props){
    const [item , setItem] = useState("");

    const handleChange = e =>{
        const {value} = e.target
        setItem(value);
    };
    const handleSubmid = e =>{
        e.preventDefault();
        const todo = {
            [e.target.name]: item
        }
        props.addTodo(todo)
        setItem("")
    }
    return(
        <form name ="todo" onSubmit={handleSubmid}>
            <input
            placeholder="Add To Do ..."
            type="text"
            value={item}
            onChange ={handleChange}  
            required/>
            <button type="submit">Create</button>
        </form>
    )
}

export default Form