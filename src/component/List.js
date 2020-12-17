import React from "react";
import ListItem from "./ListItem"

class List extends React.Component{
    render(){
        return(
            <ul>
                {this.props.list.map((item, id) =>(
                    <ListItem item = {item} key ={id} onDelete = {()=>this.props.onDelete(id)}/>
                ) )}
            </ul>
        )
    }
}

export default List