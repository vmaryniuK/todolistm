import React ,{Component}from "react";
import "./item-add-form.css"

 class ItemAddForm extends Component{

   state={
       label:"",
       isEmpty:true
   };
   onLabelChange=(e)=>{
    this.setState({
        label:e.target.value,
        isEmpty:e.target.value !=="" ? false : true
    })

   };
   
   onSubmit=(e)=>{
       e.preventDefault();
       this.props.AddItem(this.state.label);
         
               this.setState({
               label:"",
               isEmpty:true
           });
          
       
   }
    render(){
        
        
    return(
        
        <form className="item-add-form"
            onSubmit={this.onSubmit}>

            <input type="text" 
            className="form-control"
            onChange={this.onLabelChange}
            value={this.state.label}/>

            <button className="btn btn-secondary add"
            disabled={this.state.isEmpty}>
                Add Item
            </button>
        </form>
    )

    
}}
export default ItemAddForm;