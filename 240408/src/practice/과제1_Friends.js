import React from "react";

class Friend extends React.Component {
    constructor(props){
        super(props)

        this.name = props.name
        this.age = props.age
        this.city = props.city
    }

    render(){
        const {name, age, city} = this.props
        return(
            <>
                <h1>{name}</h1>
                <h1>{age}</h1>
                <h1>{city}</h1>
                <h1>--------------</h1>
            </>
        )
    }
}
export default Friend