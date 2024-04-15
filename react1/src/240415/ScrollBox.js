// import React from "react";

// class ScollBox extends React.Component{
//     constructor(props){
//         super(props)
//         this.box = React.createRef()
//     }
//     ScrollToBottom = () => {
//         const {scrollHeight, clientHeight} = this.box.current
//         this.box.current.scrollTop = scrollHeight - clientHeight
//     }
//     render(){
//         const style = {
//             border: '1px solid orange',
//             height: '500px',
//             width: '500px',
//             overflow: 'auto',
//             position: 'relative',
//             scrollBehavior: 'smooth'
//         }
//         const innerStyle = {
//             width: '100%',
//             height: '1000px',
//             background: 'linear-gradient(white,orange)'
//         }
//         return(
//             <div style={style} ref={this.box}>
//                 <div style={innerStyle}></div>
//             </div>
//         )
//     }
// }


import React, {forwardRef, useRef} from "react";

const ScollBox = forwardRef((props, ref) => {
    const style = {
        border: '1px solid orange',
        height: '500px',
        width: '500px',
        overflow: 'auto',
        position: 'relative',
        scrollBehavior: 'smooth'
    }
    const innerStyle = {
        width: '100%',
        height: '1000px',
        background: 'linear-gradient(white,orange)'
    }
    return(
        <div style={style} ref={ref}>
            <div style={innerStyle}></div>
        </div>
    )
})

export default ScollBox