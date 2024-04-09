import React from "react";

class Counter extends React.Component {
    state = {
        count: 0
    }

    increase = () => {
        const {count} = this.state
        console.log('전', count)
        this.setState(prevState => {
            console.log(prevState)
            return {count: prevState.count + 1}
        })
        console.log('후', count)
    }
    increaseMultiple = () => {
        this.increase()
        this.increase()
        this.increase()
        console.log('멀티', this.state.count)
    }
    render(){
        const {count} = this.state
        console.log('render', count)
        return(
            <>
                <h1>{count}</h1>
                <button onClick={this.increaseMultiple}>카운팅</button>
            </>
        )
    }
}
export default Counter