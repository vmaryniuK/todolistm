import React, { Component }from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form/item-add-form";

import './app.css';

export default class App extends Component {
  newId=100;
  state= {
    todoData : [
      this.onCreateItem('Finish  STEP'),
      this.onCreateItem('Found work'),
      this.onCreateItem('Self-develop')],
      term:"",
      filter: ""
}
  onCreateItem(label){
    return{
      label,
      important:false,
      id:this.newId++,
      done:false
    }

  }
  deleteItem=(id)=>{
      this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id===id)
      todoData.splice(idx,1)
      const before=todoData.slice(0,idx)
      const after=todoData.slice(idx)
      const newAray=[...before,...after]
     return{
        todoData:newAray
      }
    })
     
  }
  
     addItem=(text)=>{
      const newItem=this.onCreateItem(text)
      
    this.setState(({todoData})=>{
      const newArray=[
        ...todoData,newItem
      ]
      return{
        todoData:newArray
      }
    })
  }
    
  onImportant=(id)=>{
      
      this.setState(({todoData})=>{
      const idx=todoData.findIndex((el)=>el.id===id);
      const oldItem=todoData[idx];
      const before=todoData.slice(0,idx);
      const after= todoData.slice(idx+1);
      const newItem={...oldItem,important:!oldItem.important}
      const newArray= [...before,newItem,...after]
     return{
        todoData:newArray 
      }
    }
    )};


   onDone=(id)=>{
     this.setState(({todoData})=>{
      const idx=todoData.findIndex((el)=>el.id===id)
      const oldItem=todoData[idx]
      const newItem={...oldItem,done:!oldItem.done}
      const before=todoData.slice(0,idx)
      const after=todoData.slice(idx+1)
      const newAray=[...before,newItem,...after]
     return{
        todoData:newAray
      }
     })}
     onSearch=(term)=>{
       this.setState({term});
     }
     search(items,term){
       if(term.length === 0){
         return items;
       }

       return items.filter((i)=>{
         return i.label.toLowerCase().indexOf(term.toLowerCase())> -1
       })
     }

     filter=(items,filter)=>{
       switch (filter){
        case "all":
          return items;
        case "active":
          return items.filter((i)=> !i.done);
        case "done":
          return items.filter((i)=> i.done)

          default:return items;}}
  
    changeFilter=(filter)=>{
      this.setState({filter})
    }
  render(){
    const {todoData,term,filter} = this.state
    const countDone = this.state.todoData.filter((el)=>el.done).length
    const visible = this.filter(this.search (todoData,term),filter)
    const count = this.state.todoData.length-countDone
    return (
      <div className="todo-app">
      <AppHeader toDo={count} done={countDone} />
      <div className="top-panel d-flex">
        <SearchPanel onSearch={this.onSearch}/>
        <ItemStatusFilter 
        changeFilter={this.changeFilter}
        filter={filter}/>
      </div>

      <TodoList   
        todos={visible} 
        onDeleted={this.deleteItem}
        onImportant={this.onImportant}
        onDone={this.onDone}
      />
      <ItemAddForm 
        AddItem={this.addItem}
        data={this.state.todoData}
      />
    </div>
  );
  }
};


