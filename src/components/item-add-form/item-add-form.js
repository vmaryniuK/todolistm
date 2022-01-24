import React from "react";
import "./item-add-form.css"

 function ItemAddForm({AddItem}){
  
    return(
        <div className="item-add-form">
            <button className="btn btn-outline-secondary"
            onClick={()=>AddItem(" Hello world")}>
                Add Item
            </button>
        </div>
    )

    
}
export default ItemAddForm;