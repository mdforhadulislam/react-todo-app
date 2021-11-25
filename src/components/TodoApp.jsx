import { Component } from "react";
import AddTodo from "./AddTodo";
import Header from "./header";

class Todo extends Component {
    state = {
        items: [],
        text: "",
    };

    // add to the value state 
    input__value__set__to__state = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    // from submit add to the state 
    submit__feild__text = (e) => {
        e.preventDefault();

        if (this.state.text === "") {
            alert("Feild The Input Box");
        } else {
            const unick__obj = {
                id: Date.now(),
                value: this.state.text,
            };
            this.setState({
                items: this.state.items.concat(unick__obj),
                text:''
            });
        }
    };

    // delete list 
deleteButton=(index,items)=>{
    console.log(index,items);
    const copyListItem=Object.assign([],items);
    copyListItem.splice(index,1)
    this.setState({
        items:copyListItem
    })
    console.log(copyListItem);
}

// clear all list 
clearAllButton=(e)=>{
    this.setState({
        items:[]
    })
    if( e.target.parentElement.previousSibling.innerHTML===''){
        alert('Add The List');
    }
}


    render() {
        return (
            <div className="container">
            <Header fromSubmit={this.submit__feild__text}  inputChangeValue={this.input__value__set__to__state} inputValue={this.state.text}/>
                <AddTodo values={this.state} delete={this.deleteButton} clearAll={this.clearAllButton}/>
            </div>
        );
    }
}

export default Todo;
