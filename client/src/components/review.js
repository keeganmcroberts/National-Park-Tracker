import React, { useRef, useEffect, useState } from 'react';


function Review({user}){
    const [comment, setComment] = useState('');
    const [newComment, setNewComment] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")

    function handleChange( event ) {
        setComment(event.target.value);
      };

      function handleSubmit(event){
          event.preventDefault()

          
          //newComment.unshift(comment) // this will eventually go once the POST request adds actual comment to backend db 
          //setComment("")
          
          if (!user){
              setErrorMessage("Must be signed in to comment")
            }



            let userComment = {
                comment: comment
            }

          fetch(`/userComment`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(userComment)
          })
          .then(r => r.json())
          .then(comment=>{
            console.log(comment.comment)
        })
      } 

      useEffect(()=>{
        fetch("/userComment")
        .then(res => res.json())
        .then(comments => {setNewComment(comments)
        
        })}, [])


        console.log("comments array:", newComment)

        // newComment.forEach(eachComment=>{
        //     console.log(eachComment.comment)
        // })
        

    return(
        <div className='comment-form'>
            <form onSubmit={handleSubmit}>
                <h3 className='comment-form-header'>Leave a Review</h3>
                <input className="comment-input" name="comment" type="text" value={comment} onChange={handleChange}/>
                <input type="submit"/>
                {!user ? 
                <h4 className='comment-error-message'>{errorMessage}</h4>
                : null}
            </form>
            <div className='comment-section'>
                <h3>Comments:</h3>
                    {newComment.map(comments=>{
                    return(
                        !user ?
                            
                            <div>
                                {/* <h4 className='comment-user'>{user.email}:</h4> */}
                                <h4 className='comments'>{comments.comment}</h4>
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