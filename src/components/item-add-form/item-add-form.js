import React ,{Component}from "react";
import "./item-add-form.css"

 class ItemAddForm extends Component{

   state=({
       label:" "
   })
   onLabelChange=(e)=>{
    this.setState({
        label:e.target.value
    })
   }
   onSubmit=(e)=>{
       e.preventDefault();
       this.props.AddItem( this.state.label )
   }
    render(){
        
        
    return(
        <form className="item-add-form"
        onSubmit={this.onSubmit}>
            <input type="text" 
            className="form-control"
            placeholder="What we need to do"
            onChange={this.onLabelChange}/>
            <button className="btn btn-outline-secondary"
            >
                Add Item
            </button>
        </form>
    )

    
}}
export default ItemAddForm;