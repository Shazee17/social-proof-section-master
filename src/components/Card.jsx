import React from "react"


const Card = (props) => {
    return(
        <div className="card">

            <div className="user-info">
            <img src={`../src/images/${props.item.profilePicture}`} 
                className="profile-picture"
            />

            <div>
                <div className="name">{props.item.name}</div>
                <div className="title">{props.item.title}</div>
            </div>
            </div>

            <div className="review">
                {`" ${props.item.review} "`}
            </div>

            
        </div>
    )
}

export default Card;