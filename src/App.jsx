import React from "react"
import Card from "./components/Card"
import Ratings from "./components/Ratings"
import cardData from "./cardData"
import ratingsData from "./ratingsData"
import "./style.css"
import BgPatterns from "./components/BgPatterns"


const App = () => {
  
  const cards = cardData.map(item => (
        <Card
          key={item.id}
          item={item}
        />
  )
);

  const ratingsList = ratingsData.map(item => (
      <Ratings
        key={item.id}
        item={item}
      />
  )
);

  return (
  <>
    <BgPatterns />
      
    <div className="flex-container">

      <div className="text-container">
        <h1>
          10,000+ of our users love our products.
        </h1>
      
        <p>
            We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.
        </p>
      </div>

    <div className="ratings-component-list">
      {ratingsList}
    </div> 

    </div>

    <div className="cards-list">
      {cards}
    </div>
  </>
  );

}

export default App;

