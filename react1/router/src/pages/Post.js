import React from "react";
import { useParams, NavLink, useSearchParams, useLocation } from 'react-router-dom'
import posts from "../postData";
import './Post.css'

function Post(){
    const params = useParams()

    const [searchParams, setSearchParams] = useSearchParams()
    const applyActiveColor = ({ isActive }) => (isActive ? {color: 'orangered', background: 'yellow'} : {})
    const changeQueryString = (e) => {
        const filter = e.target.value
        if(filter){
            setSearchParams({ filter, keyword: '키워드' })
        }else{
            setSearchParams({})
        }
    }
    const QueryNavLink = ({to, children, ...props}) => {
        const location = useLocation()
        console.log(location)
        return <NavLink to={to+location.search} {...props}>{children}</NavLink>
    }
    const postsFiltered = posts
    .filter(post => {
        const filter = searchParams.get('filter')
        if(!filter) return true
        const title = post.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    })
    const post = postsFiltered[params.postId]
    return (
        <>
            <br/><input className="filter-post" placeholder="Search Post..." 
            onChange={changeQueryString} value={searchParams.get('filter') || ''}/>
            {post ?
                <div className="post-container">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <span>{post.created}</span>
                </div> :
                <h1>POST PAGE</h1>}

            {postsFiltered
            .map((post, id) => {
                return (
                    <QueryNavLink key={id} to={`/posts/${id}`} className='post-item'
                    style={applyActiveColor}>
                        {post.title}
                    </QueryNavLink>
                )
            })}
        </>
    )
}
export default Post