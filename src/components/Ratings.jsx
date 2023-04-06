import React from "react"
import starIcon from "../images/icon-star.svg"

const Ratings = (props) => {
    const renderImage = () => {
        const imageArray = [];
        for (let i=0; i<5; i++){
            imageArray.push(<img src={starIcon} alt="#"/>);
        }

        return imageArray;
    }

    return(
        <div className="ratings-component">
            <div className="star-icons">
            {renderImage()}
            </div>

            <div>
                {`Rated 5 Stars in ${props.item.name}`}
            </div>
        </div>
    )
}

export default Ratings;


