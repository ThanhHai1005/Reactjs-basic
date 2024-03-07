import React from 'react';
import './listToDo.scss'
import AddToDo from './addToDo';
import { toast } from 'react-toastify';

class ToDoList extends React.Component {
    state = {
        listTool: [
            { id: 'toDo1', title: 'Doing homeWork' },
            { id: 'toDo2', title: 'Making Video' },
            { id: 'toDo3', title: 'fix bug' }
        ]
    }


    addNewToDo = (todo) => {
        this.setState({
            listTool: [...this.state.listTool, todo]
        })
        toast.success("Wow so easy!");
    }
    render() {
        let { listTool } = this.state;
        return (
            <>
                <div className='toDo-list-container'>
                    <AddToDo
                        addNewToDo={this.addNewToDo}
                    />

                    <div className='toDo-list-content'>

                        {listTool && listTool.length > 0 &&
                            listTool.map((item, index) => {
                                return (
                                    <div className='toDo-child' key={item.id}>
                                        <span>{index + 1} - {item.title}</span>
                                        <button className='edit'>Edit</button>
                                        <button className='delete'>Delete</button>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>
            </>


        )
    }
}

export default ToDoList;



