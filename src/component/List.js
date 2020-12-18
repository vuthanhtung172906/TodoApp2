import React from "react";
import ListItem from "./ListItem"

class List extends React.Component{
    render(){
        return(
           <div>
           <ul>
                {this.props.list.map((item, index) =>(
                    <ListItem item = {item.todo} id ={index} onDelete = {()=>this.props.onDelete(index)}
                    saveItemEdit={this.props.saveItemEdit}
                    />
                ) )}
            </ul>
            <h2>You have {this.props.count} things to do</h2>
            </div>
        )
    }
}

export default List