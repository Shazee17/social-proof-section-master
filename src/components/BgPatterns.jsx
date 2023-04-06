import React from "react"
import bgPatternTop from "../images/bg-pattern-top-desktop.svg"
import bgPatternBottom from "../images/bg-pattern-bottom-desktop.svg"
import bgPatternTopMobile from "../images/bg-pattern-top-mobile.svg"
import bgPatternBottomMobile from "../images/bg-pattern-bottom-mobile.svg"

const BgPatterns = () => {
    return(
        <>
        <img className="Bg-pattern-desktop-top" src={bgPatternTop} alt="#" />
        <img className="Bg-pattern-desktop-bottom" src={bgPatternBottom} alt="#" />
        <img className="Bg-pattern-mobile-top" src={bgPatternTopMobile} alt="#" />
        <img className="Bg-pattern-mobile-bottom" src={bgPatternBottomMobile} alt="#" />
        </>
        
    )
}

export default BgPatterns;