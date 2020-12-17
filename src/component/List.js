import React from "react";
import ListItem from "./ListItem"

class List extends React.Component{
    render(){
        return(
            <ul>
                {this.props.list.map(item =>(
                    <ListItem item = {item}/>
                ) )}
            </ul>
        )
    }
}

export default List