import React ,{Component}from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import ItemAddForm from "../item-add-form/item-add-form";

export default class App extends Component {
  newId=100;
  state= {
    todoData : [
      this.onCreateItem('Drink Coffee'),
      this.onCreateItem('Make Awesome App'),
      this.onCreateItem('Fack someone'),

  ]}
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
     })
    
    }
  
  render(){
    const countDone=this.state.todoData.filter((el)=>el.done).length
    const count=this.state.todoData.length-countDone
    return (
    <div className="todo-app">
      <AppHeader toDo={count} done={countDone} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={this.state.todoData} 
      onDeleted={this.deleteItem}
      onImportant={this.onImportant}
      onDone={this.onDone}/>
      <ItemAddForm AddItem={this.addItem}/>
    </div>
  );
  }
};


