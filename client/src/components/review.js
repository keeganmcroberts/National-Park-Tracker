import React, { useRef, useEffect, useState } from 'react';


function Review({user}){
    const [comment, setComment] = useState('');
    const [newComment, setNewComment] = useState([]);

    function handleChange( event ) {
        setComment(event.target.value);
      };

      function handleSubmit(event){
          event.preventDefault()

          newComment.unshift(comment)
          setComment("")

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
                            
                            <div>
                                <h4 className='comment-user'>{user.email}:</h4>
                                <h4 className='comments'>{comments}</h4>
                            </div>
                        :
                        null 
                    )
                    })} 
            </div>
        </div>
    )
}


export default Review;