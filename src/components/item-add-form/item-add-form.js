import React ,{ useState }from "react";
import "./item-add-form.css"

 const ItemAddForm = ({AddItem, data}) => {
    const [label, setLabel] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);

    const onLabelChange=(e)=>{
        setLabel(e.target.value);
        e.target.value !=="" ? setIsEmpty(false) : setIsEmpty(true);
    };

    const checkSameItem = (item) => {
        let flag = true;
        data.forEach(element => {
            console.log(element)
            if(element.label === item){
                flag = false;
                return;
            }
        });
        return flag;
    }
   
    const onSubmit = (e) => {
        if(checkSameItem(label)){
            e.preventDefault();
            AddItem(label);
            setLabel("");
            setIsEmpty(true);
        }
        else{
            e.preventDefault();
            setLabel("");
            setIsEmpty(true);
            alert("Таке уже є");
        }
    }  

    return(    
        <form 
            className="item-add-form"
            onSubmit={onSubmit}
        >
            <input 
                type="text" 
                className="form-control"
                onChange={onLabelChange}
                value={label}
            />
            <button 
                className="btn btn-secondary add"
                disabled={isEmpty}
            >
                Add Item
            </button>
        </form>
    );
}
export default ItemAddForm;