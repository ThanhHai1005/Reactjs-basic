import React from "react";

class EditDeleteTodo extends React.Component {
    handleDelete = (job) => {
        this.props.deleteJob(job);
    }
    handleEdit = () => {
        this.props.editJob();
    }
    render() {
        let { listTool } = this.props;
        return (
            <>
                {
                    listTool.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary} <></>

                                <button className='edit' onClick={() => { this.handleEdit() }}>Edit</button>

                                <button className='delete' onClick={() => { this.handleDelete(item) }}>Delete</button>

                            </div>
                        )
                    })}
            </>
        )
    }
}

export default EditDeleteTodo