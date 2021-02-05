import { useEffect } from "react"

import { Link } from "react-router-dom"

import CVen from "./../files/CVen.pdf"
import CVsk from "./../files/CVsk.pdf"

const MobileMyCV = (props) => {

    useEffect(() => {
        props.menuClose()
    }, [])

    return(
        <div className="mobile-div-1">
            <h1 className="simon-ugor-heading">My CV</h1>
            <Link to={CVen} target="_blank" download><button className="div1-button">Download (EN)</button></Link>
            <Link to={CVsk} target="_blank" download><button className="div1-button">Stiahnut (SK)</button></Link>
        </div>
    )
}

export default MobileMyCV