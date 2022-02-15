import React ,{Component}from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons=[
    {name:"all", label: "All"},
    {name:"active", label: "Active"},
    {name:"done", label: "Done"}
  ]

  
  render(){ 

    const {filter,changeFilter}=this.props;
    const buttons = this.buttons.map(({name,label})=>{
    const isActive = filter === name;
    const changeClass = isActive ? 'btn-info': "btn-secondary";
      return (<button type="button"
                    className = {`btn ${changeClass}`}
                    key={name}
                    onClick={()=>changeFilter(name)}>
                    {label}
              </button>)
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
 
};


