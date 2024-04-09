import React, { Component } from 'react'

class CommentFilter extends Component{
    state = {
        comment: this.props.comment.split(' '),
        insults: ['바보', '똥개', '그지', '임마', '새끼', '죽을']
    }

    filterComment = () => {
        const { insults } = this.state // 댓글을 음절 단위로 끊기

        for(let insult of insults){ // 욕설 필터링
            this.setState((prevState) => {
                return {comment: prevState.comment.filter(word => !word.includes(insult)) }
            })
        }
    }
    componentDidMount(){
        this.filterComment()
    }
    render(){
        const { comment } = this.state
        return (
            <>
                <h2>{comment.join(' ')}</h2>
            </>
        )
    }
}
export default CommentFilter