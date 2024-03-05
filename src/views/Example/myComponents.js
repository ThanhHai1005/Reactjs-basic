import React from 'react';
import ChildComponent from './childComponent';
import AddComponent from './addComponent';
class Mycomponent extends React.Component {

    state = {

        arrayJob: [
            { id: 'job1', title: 'jounalist', salary: '500' },
            { id: 'job2', title: 'worker', salary: '800' },
            { id: 'job3', title: 'doctor', salary: '10000' },
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent', job)
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        })

    }

    render() {
        console.log('>>> call render', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} />

                <ChildComponent
                    arrayJob={this.state.arrayJob}
                />

            </>

        )
    }

}

export default Mycomponent;