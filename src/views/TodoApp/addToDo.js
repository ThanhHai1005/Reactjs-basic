import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: '',
    }

    handleOnChangeTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClick = () => {
        if (!this.state.title) {
            toast.error("Missing required parameter");
            return;
        }
        this.props.addNewToDo({
            id: Math.floor(Math.random() * 1001), // truyền lại cho th cha 2 phần tử gồm {id title salary} tại state của th con, 
            title: this.state.title,
        })

        this.setState({
            title: ''
        })
    }
    handleDelete = (job) => {
        this.props.deleteJob(job);
    }
    render() {
        let title = this.state
        return (
            <>
                <div className='add-toDo'>
                    <input type='text' value={this.state.title}
                        onChange={(event) => { this.handleOnChangeTodo(event) }}
                    />
                    <button className='add' type='button'
                        onClick={() => { this.handleOnClick() }}>Add</button>
                </div>
            </>
        )
    }
}

export default AddToDo