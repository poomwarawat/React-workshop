import React from 'react'


const LikeButton = (props) =>{
    return(
        <div>
            <button onClick={handleClick}>Like</button>
        </div>
    )
    function handleClick(){
        props.onClickLike()
    }
}
export default LikeButton
