import React from "react";

class ListItem extends React.Component{
    myRef = React.createRef();
    onRemove = ()=>{
        console.log(this.myRef.current.className = "active")
        setTimeout(() => {
            this.props.onDelete();
        }, 200);
    }
    render(){
        return(
           <div>
            <li ref={this.myRef}>
                {this.props.item.title}
                <div className="row">
                    <i className="fa fa-pencil"
                       title="Edit"

                    />
                    <i className="fa fa-trash" title ="Delete" onClick={this.onRemove}/>

                </div>
            </li>
           </div>
        )
    }
}

export default ListItem