import React from 'react';

import './todo-list-item.css';

export default function  TodoListItem ({label,onDeleted,onImportant,onDone,important,done}) {
 
  
  let classNames ="todo-list-item "
   if(done){
     classNames +='done'
   }
   if(important){
     classNames +=' important'
   }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={(id)=>onDone(id)}
        >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={(id)=>onImportant(id)}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right" onClick={(id)=>onDeleted(id)}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );} 



