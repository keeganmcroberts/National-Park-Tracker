import React, { useRef, useEffect, useState } from 'react';


function Review(){
    const [comment, setComment] = useState('comment...');

    const handleChange = event => {
        setComment(event.target.value);
      };

      console.log(comment)


    return(
        <div className='comment-form'>
            <br></br>
            <br></br>
            <br></br>
        <form>
        <input className="comment-input" name="comment" type="text" value={comment} onChange={handleChange}/>
        <input type="submit"/>
        </form>
        </div>
    )
}

export default Review;