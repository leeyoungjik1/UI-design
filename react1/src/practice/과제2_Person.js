import React from 'react';

class Person2 extends React.Component {
  state = {
      name: "sunrise",
      age: 23,
      friends: [
          "victoria",
          "daniel",
          "hanna"
      ]
  }
  
  displayInfo = () => {
    console.log(this.state)
    const {name, age, friends} = this.state
    alert(
        `신상정보\n\------------------\n\이름: ${name}\n\나이: ${age}\n\친구: ${friends}`
        )
  }
  
  render() {    
    return (
    	<>
            <button onClick={this.displayInfo}>신상정보 확인하기</button>
        </>
    )
  }
}

export default Person2;