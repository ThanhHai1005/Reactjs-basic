import React from "react";
import { toast } from 'react-toastify';

class EditDeleteTodo extends React.Component {


    handleDelete = (job) => {
        this.props.deleteJob(job);

        toast.success("Delete succeed!");
    }


    handleEdit = (todo) => {
        let { editTodo, listTool } = this.props;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTool];

            //Find index of specific object using findIndex method.    
            let objIndex = listTodoCopy.findIndex(obj => obj.id == todo.id);

            //Update object's name property.
            listTodoCopy[objIndex].title = editTodo.title;

            toast.success("Updated succeed!");

            this.props.changeJob(listTodoCopy)
            return;
        }
        //edit
        this.props.editJob(todo);
    }

    handleOnChangeEdit = (event) => {
        let editTodoCopy = { ...this.props.editTodo };
        editTodoCopy.title = event.target.value;

        this.props.edittodoJob(editTodoCopy);

    }

    render() {
        let { listTool, editTodo } = this.props;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                {
                    listTool.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {
                                    isEmptyObj === true ?
                                        <span>
                                            {index + 1} - {item.title}
                                        </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => { this.handleOnChangeEdit(event) }}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>

                                }
                                <button className='edit' onClick={() => { this.handleEdit(item) }}>
                                    {isEmptyObj === false && editTodo.id === item.id ?
                                        ' Save' : 'Edit'}
                                </button>

                                <button className='delete' onClick={() => { this.handleDelete(item) }}>Delete</button>

                            </div>
                        )
                    })}
            </>
        )
    }
}

export default EditDeleteTodo