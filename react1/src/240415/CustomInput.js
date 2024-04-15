// import React, {Component} from "react";

// class CustomInput extends Component {
//     constructor(props){
//         super(props)
//         this.textInput = ["Name", "Password", "ConfirmPassword"]
//     }
//     focusInput = (id, e) => {
//         console.log(this.textInput)
//         // this.textInput.current.focus()
//         for(let input of this.textInput){
//             input.current.style.backgroundColor = "white"
//         }
//         this.textInput[id].current.style.backgroundColor = "red"
//     }
//     render(){
//         return(
//             <>
//                 {this.textInput.map((labelName, id) => {
//                     this.textInput[id] = React.createRef()
//                     return (
//                         <div key={id}>
//                             <label>
//                                 {labelName}
//                                 <input type="text" ref={this.textInput[id]} onClick={(e) => this.focusInput(id, e)}></input>
//                             </label>
//                         </div>
//                     )
//                 })}
//             </>
//         )
//     }
// }



import React, {useRef} from "react";

function CustomInput(props){
    const textInput = useRef(["Name", "Password", "ConfirmPassword"])

    const focusInput = (id, e) => {
        for(let input of textInput.current){
            input.current.style.backgroundColor = "white"
        }
        textInput.current[id].current.style.backgroundColor = "red"
    }

    return(
        <>
            {textInput.current.map((labelName, id) => {
                textInput.current[id] = React.createRef()
                return (
                    <div key={id}>
                        <label>
                            {labelName}
                            <input type="text" ref={textInput.current[id]} onClick={(e) => focusInput(id, e)}></input>
                        </label>
                    </div>
                )
            })}
        </>
    )
}

export default CustomInput