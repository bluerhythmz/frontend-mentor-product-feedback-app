import React from 'react'
import Comment from '../Comment/Comment'

const CommentsList = ( { comments }) => {
  return (
    <section>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  )
}

export default CommentsList
