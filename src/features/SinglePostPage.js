import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SinglePostPage = () => {
    const { postId } = useParams()
    const dispatch = useDispatch();

    return (
        <div>
           <h2>hello</h2> 
        </div>
    )
}

export default SinglePostPage
