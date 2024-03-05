import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState(
            { showJob: !this.state.showJob }
        )
    }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let { arrayJob } = this.props;
        let { showJob } = this.state;
        return (
            <>

                {showJob === false ?
                    <div>
                        <button onClick={() => { this.handleShowHide() }}>Show</button>
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
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })}
                        </div>
                        <div><button onClick={() => { this.handleShowHide() }}>Hide</button></div>
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