import React from 'react';
import './demo.scss'
class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState(
            { showJob: !this.state.showJob }
        )
    }

    handleOnclickDelete = (job) => {
        // console.log('>>>  handleOnclickDelete', job)
        this.props.deleteJob(job);
    }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let { arrayJob } = this.props; // hứng đc data từ th cha
        let { showJob } = this.state;  // state ban đầu
        return (
            <>

                {showJob === false ?
                    <div>
                        <button
                            className='btn-show'
                            onClick={() => { this.handleShowHide() }}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job-list'>
                            {/* {
                        arrayJob.map((item, index) => {
                            if (+item.salary >= 800) {
                                return (
                                    <div key={item.id}>
                                        {item.nameJob} - {item.address} - {item.salary}
                                    </div>
                                )
                            }

                        })
                    } */}
                            {
                                arrayJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <span
                                                onClick={() => { this.handleOnclickDelete(item) }}>
                                                x
                                            </span>
                                        </div>
                                    )
                                })}
                        </div>

                        <div>
                            <button onClick={() => { this.handleShowHide() }}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }

}


// const ChildComponent = (props) => {
//     let { arrayJob } = props;
//     return (
//         <>
//             <div className='job-list'>
//                 {
//                     arrayJob.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.nameJob} - {item.address}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>

//     )
// }

export default ChildComponent;