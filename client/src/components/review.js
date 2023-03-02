import React, { useRef, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


function Review({user}){
    const [comment, setComment] = useState('');
    const [newComment, setNewComment] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")

    function handleChange( event ) {
        setComment(event.target.value);
      };

      const {parkCode} = useParams();

      console.log("park code", parkCode)
      console.log("user id", user.id)


      function handleSubmit(event){
          event.preventDefault()

          //newComment.unshift(comment) // this will eventually go once the POST request adds actual comment to backend db 
          //setComment("")
          let userComment = {
              comment: comment,
              parkCode: parkCode,
              user_id: user.id
              // user: user.id
          }
          
          
          if (user){
              fetch(`/userComment`,{
                  method:'POST',
                  headers:{'Content-Type': 'application/json'},
                  body:JSON.stringify(userComment)
                })
                .then(r => r.json())
                .then(comment=>{
                    setNewComment([comment, ...newComment])
                })
            }
            else {
                setErrorMessage("Must be signed in to comment")
              }
        } 
        
        console.log("our user:", user)

      function deleteComment(id){
    
        fetch(`/deleteComment/${id}`,{
            method:'DELETE'
          })
        
    
          .then(()=>{
            fetch("/userComment")
            .then(res => res.json())
            .then(data => setNewComment(data))    
          })
    }
      
      
      useEffect(()=>{
        fetch("/userComment")
        .then(res => res.json())
        .then(comments =>
            
            {setNewComment(comments)
        
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
                        if (comments.parkCode === parkCode)
                    return(
                        // user ?
                            
                            <div className='comments'>
                                <h4 className='comment-user'>{comments.user.email}:</h4>
                                <h4>{comments.comment}</h4> 
                                <button onClick={()=>deleteComment(comments.id)}>Delete</button>
                            </div>
                        // :
                        // null 
                    )
                    })} 
            </div>
        </div>
    )
}


export default Review;