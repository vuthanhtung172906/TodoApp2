import React from "react";

class ListItem extends React.Component{
    state = {
        onEdit : false,
        editVal : this.props.item
    };
    myRef = React.createRef();
    onRemove = ()=>{
        this.myRef.current.className = "active"
        setTimeout(() => {
            this.props.onDelete();
        }, 200);
    }
    handleEditValue = (e) =>{
       const {name , value} = e.target
       console.log(value)
       this.setState({   
           [name]: value
       })
    }

    onEdit = ()=>{
        this.setState({
            onEdit : true
        })
    }
    handleCancel = ()=>{
        const {editVal} = this.state;
        if(editVal ===""){
            this.setState({editVal:this.props.item})
        }
        this.setState({
            onEdit : false
        })
    }
    handleSave = ()=>{
        const {editVal} = this.state;
        if(editVal ===""){
            this.setState({editVal:this.props.item});
        }else{
            this.props.saveItemEdit(editVal , this.props.id);
        }
        this.setState({onEdit:false})
    }
    render(){
        if(this.state.onEdit){
            return(
                <div>
                 <li ref={this.myRef}>
                     <input type="text"
                      value ={this.state.editVal}
                      name ="editVal" id = "editVal"
                      onChange = {this.handleEditValue}
                    />
                     <div className="row">
                         <i className="fa fa-save"
                            title="Save"
                            onClick={this.handleSave}
                         />
                         <i className="fa fa-times" title ="Cancle" onClick={this.handleCancel}/>
     
                     </div>
                 </li>
                </div>
             )
        }else{
            return(
                <div>
                 <li ref={this.myRef}>
                     {this.props.item}
                     <div className="row">
                         <i className="fa fa-pencil"
                            title="Edit"
                            onClick= {this.onEdit}
                         />
                         <i className="fa fa-trash" title ="Delete" onClick={this.onRemove}/>
     
                     </div>
                 </li>
                </div>
             )
        }

    }
}

export default ListItem