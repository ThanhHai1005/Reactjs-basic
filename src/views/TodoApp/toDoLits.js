import React from 'react';
import './listToDo.scss'
import AddToDo from './addToDo';
import { toast } from 'react-toastify';
import EditDeleteTodo from './deleteToDo';


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

    editJob = () => {
        alert('click edit')
    }

    deleteJob = (job) => {
        let currentJobs = this.state.listTool;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            listTool: currentJobs
        })

    }

    render() {

        return (
            <>
                <div className='toDo-list-container'>
                    <AddToDo addNewToDo={this.addNewToDo} />

                    <div className='toDo-list-content'>
                        <div className='toDo-child' >
                            {/* <EditTodo editJob={this.editJob} /> */}
                            <EditDeleteTodo
                                listTool={this.state.listTool}
                                editJob={this.editJob}
                                deleteJob={this.deleteJob}
                            />
                        </div>


                    </div>

                </div>
            </>


        )
    }
}

export default ToDoList;



