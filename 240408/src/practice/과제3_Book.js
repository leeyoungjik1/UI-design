import React from "react";

class Book extends React.Component {
    state = {
        title: '해리포터',
        author: '조앤K롤링',
        summary: '해리포터가 마법사로 성장해나가는 과정을 그린 이야기',
        genre: '판타지 소설',
        release: '2003년 9월 4일',
        ISBN: '1234567890'
   }

    render(){
        const {title, author, summary, genre, release, ISBN} = this.state

        return (
            <>
                <h1>도서 정보</h1>
                <h2>제목 - {title}</h2>
                <h2>저자 - {author}</h2>
                <h2>줄거리 - {summary}</h2>
                <h2>장르 - {genre}</h2>
                <h2>출판일 - {release}</h2>
                <h2>ISBN - {ISBN}</h2>
            </>
        )
    }
}
export default Book