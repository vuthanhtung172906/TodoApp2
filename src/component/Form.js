import React,{useState} from "react"

function Form(props){
    const [title , setTitle] = useState("");

    const handleChange = e =>{
        setTitle(e.target.value);
    };
    const handleSubmid = e =>{
        e.preventDefault();
        props.addTodo(title)
        setTitle("")
    }
    return(
        <form onSubmit={handleSubmid}>
            <input
            placeholder="Add To Do ..."
            type="text"
            value={title}
            onChange ={handleChange}  
            required/>
            <button type="submit">Create</button>
        </form>
    )
}

export default Form