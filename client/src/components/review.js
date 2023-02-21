import React, { useRef, useEffect, useState } from 'react';


function Review(){
    const [comment, setComment] = useState('comment...');
    const [newComment, setNewComment] = useState([]);

    function handleChange( event ) {
        setComment(event.target.value);
      };

      console.log(comment)

      function handleSubmit(event){
          event.preventDefault()

          newComment.unshift(comment)
      }

      console.log("comment array", newComment)

    return(
        <div className='comment-form'>
        <form onSubmit={handleSubmit}>
        <h3 className='comment-form-header'>Leave a Review</h3>
        <input className="comment-input" name="comment" type="text" value={comment} onChange={handleChange}/>
        <input type="submit"/>
        </form>
        <div className='comment-section'>
           {useEffect(()=>{
               newComment.map(comments=>{
               return(
                   <h1>{comments}</h1>
               )
           })
           }, [handleSubmit])
        }
        </div>
        </div>
    )
}


export default Review;