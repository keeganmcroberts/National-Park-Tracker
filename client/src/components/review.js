import React, { useRef, useEffect, useState } from 'react';


function Review({user}){
    const [comment, setComment] = useState('');
    const [newComment, setNewComment] = useState([]);

    function handleChange( event ) {
        setComment(event.target.value);
      };

      console.log(comment)

      function handleSubmit(event){
          event.preventDefault()

          newComment.unshift(comment)

          if (!user){
              alert("Must be signed in to comment")
          }
      }

    return(
        <div className='comment-form'>
            <form onSubmit={handleSubmit}>
                <h3 className='comment-form-header'>Leave a Review</h3>
                <input className="comment-input" name="comment" type="text" value={comment} onChange={handleChange}/>
                <input type="submit"/>
            </form>
            <div className='comment-section'>
                <h3>Comments:</h3>
                    {newComment.map(comments=>{
                    return(
                        user ?
                   <h4 className='comments'>{user.email}:  {comments}</h4>
                   :
                   null 
                    )
                    })} 
            </div>
        </div>
    )
}


export default Review;