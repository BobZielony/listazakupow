import React, { Component } from "react";
import ToDoItems from "./Items";
import "./List.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            counter: 0
          };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
       
      }
      addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
            let tempCounter = this.state.counter;
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) , counter : tempCounter+1 
              };
            });
            this._inputElement.value = "";
          }
          console.log(this.state.items);  
          e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
        let tempCounter = this.state.counter;
        this.setState({
          items: filteredItems, counter : tempCounter-1
        });
      }
    
    
    render() {
      return (
      <>
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}
              placeholder="Wprowadz przedmiot">
              </input>
              <button type="submit">Dodaj</button>
            </form>
          </div>
        <ToDoItems entries={this.state.items}
                 delete={this.deleteItem}/>
      </div>
      <h1>Ilosc przedmiotow: {this.state.counter}</h1>
    </>
    ); 
    }
  }
 
export default TodoList;