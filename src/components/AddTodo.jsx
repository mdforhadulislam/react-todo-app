import { Component } from "react";
import '../style/style.list/list.css';
import SingleList from "./AddListItems";

class AddTodo extends Component{
    render(){
        return(
            <div className="todoList">
            <ul>
                <SingleList items={this.props.values.items} delete={this.props.delete} />
            </ul>
            <div>
                <button className="clear__all__btn" type="button" onClick={this.props.clearAll}>Clear All</button>
            </div>
        </div>
        )
    }
}

export default AddTodo;

