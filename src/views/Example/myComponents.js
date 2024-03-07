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
            arrayJob: [...this.state.arrayJob, job]         // sao chép array hiện tại và nhận đc 3 phtu từ th con
        })

    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrayJob;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrayJob: currentJobs
        })
    }

    render() {
        console.log('>>> call render', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} /> {/* truyền function sang thằng con  __truyền function có input đầu vào thì kh có dấu "(" & ")"  */}

                <ChildComponent
                    arrayJob={this.state.arrayJob}
                    deleteJob={this.deleteJob}
                />

            </>

        )
    }

}

export default Mycomponent;