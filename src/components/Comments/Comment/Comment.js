import React from 'react'

const Comment = ({ comment }) => {
  return (
    <article key={comment.id}>
      <img src={comment.user.image} alt="user" />
      <p>{comment.content}</p>
      <h1>{comment.user.name}</h1>
      <p>{comment.user.username}</p>
      {
        comment.replies && comment.replies.map(reply => (
          <article key={reply.user.name}>
            <div>{reply.content}</div>
            <div>@{reply.replyingTo}</div>
            <img src={reply.user.image} alt="user" />
            <h1>{reply.user.name}</h1>
            <p>{reply.user.username}</p>
          </article>
        ))
        }
    </article>
  )
}

export default Comment
