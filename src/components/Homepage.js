
import { useEffect, useState } from "react"

import { Link } from "react-scroll";

const Homepage = (props) => {

  useEffect(() => {
    props.menuClose()
  }, [])

  // Div 1 state

  const [div1proj1sub, setdiv1proj1sub] = useState("")
  const [div1proj1text, setdiv1proj1text] = useState("ReactJS description will be here and i need to test how it is going to look like so i am writing all this useless text")
  const [div1proj1button, setdiv1proj1button] = useState("none")

  // Div 2 state

  const [div2proj1sub, setdiv2proj1sub] = useState("")
  const [div2proj1text, setdiv2proj1text] = useState("NextJS description will be here and i need to test how it is going to look like so i am writing all this useless text")
  const [div2proj1button, setdiv2proj1button] = useState("none")

  // Div 3 state

  const [div3proj1sub, setdiv3proj1sub] = useState("")
  const [div3proj1text, setdiv3proj1text] = useState("Python description will be here and i need to test how it is going to look like so i am writing all this useless text")
  const [div3proj1button, setdiv3proj1button] = useState("none")


    // Div 1 functions

    const div1button1 = (e) => {
      e.preventDefault()
      setdiv1proj1button("")
      setdiv1proj1sub("Div 1 Project 1")
      setdiv1proj1text("This is the first project of my first div. Here will be a description so I will just write some useless text as a placeholder")
    }

    const div1button2 = (e) => {
      e.preventDefault()
      setdiv1proj1button("")
      setdiv1proj1sub("Div 1 Project 2")
      setdiv1proj1text("This is the second project of my first div. Here will be a description so I will just write some useless text as a placeholder")
    }

    const div1button3 = (e) => {
      e.preventDefault()
      setdiv1proj1button("")
      setdiv1proj1sub("Div 1 Project 3")
      setdiv1proj1text("This is the third project of my first div. Here will be a description so I will just write some useless text as a placeholder")
    }

    // Div 2 functions

    const div2button1 = (e) => {
      e.preventDefault()
      setdiv2proj1button("")
      setdiv2proj1sub("Div 2 Project 1")
      setdiv2proj1text("This is the first project of my second div. Here will be a description so I will just write some useless text as a placeholder")
    }

    const div2button2 = (e) => {
      e.preventDefault()
      setdiv2proj1button("")
      setdiv2proj1sub("Div 2 Project 2")
      setdiv2proj1text("This is the second project of my second div. Here will be a description so I will just write some useless text as a placeholder")
    }

    const div2button3 = (e) => {
      e.preventDefault()
      setdiv2proj1button("")
      setdiv2proj1sub("Div 2 Project 3")
      setdiv2proj1text("This is the third project of my second div. Here will be a description so I will just write some useless text as a placeholder")
    }

    // Div 3 functions

    const div3button1 = (e) => {
      e.preventDefault()
      setdiv3proj1button("")
      setdiv3proj1sub("Div 3 Project 1")
      setdiv3proj1text("This is the first project of my third div. Here will be a description so I will just write some useless text as a placeholder")
    }

    const div3button2 = (e) => {
      e.preventDefault()
      setdiv3proj1button("")
      setdiv3proj1sub("Div 3 Project 2")
      setdiv3proj1text("This is the second project of my third div. Here will be a description so I will just write some useless text as a placeholder")
    }

    const div3button3 = (e) => {
      e.preventDefault()
      setdiv3proj1button("")
      setdiv3proj1sub("Div 3 Project 3")
      setdiv3proj1text("This is the third project of my third div. Here will be a description so I will just write some useless text as a placeholder")
    }

    return (
        <div>
            <div className="mobile-div-1">
              <h1 className="simon-ugor-heading">Šimon Ugor</h1>
              <h2 className="simon-ugor-caption">?ReactJS and NextJS front-end developer?</h2>

              <Link
                activeClass="active"
                to="mobile-div-2"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                ><button className="div1-button">ReactJS</button>
              </Link>

              <Link
                activeClass="active"
                to="mobile-div-3"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                ><button className="div1-button">NextJS</button>
              </Link>

              <Link
                activeClass="active"
                to="mobile-div-4"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                ><button className="div1-button">Python</button>
              </Link>
               
            </div>

            <div className="mobile-div-2">
              <h1 className="div-heading">ReactJS</h1>
              <h2 className="div-heading2">{div1proj1sub}</h2>
              <p className="description-p">{div1proj1text}</p>
              <a style={{display: div1proj1button}} href="https://covidstatistics.online" target="_blank" rel="noopener noreferrer"><button className="div1-button">Check out project</button></a>
              <div className="div1-buttons-div">
                <button onClick={div1button1} className="project-button">Button 1</button>
                <button onClick={div1button2} className="project-button">Button 2</button>
                <button onClick={div1button3} className="project-button">Button 3</button>
              </div>
              <div className="back-to-homepage-button-div">
                <Link
                  activeClass="active"
                  to="mobile-header-div"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  ><button className="project-button">Homepage</button>
                </Link>
              </div>
            </div>

            <div className="mobile-div-3">
              <h1 className="div-heading">NextJS</h1>
              <h2 className="div-heading2">{div2proj1sub}</h2>
              <p className="description-p">{div2proj1text}</p>

              <a style={{display: div2proj1button}} href="https://covidstatistics.online" target="_blank" rel="noopener noreferrer"><button className="div1-button">Check out project</button></a>
              <div className="div1-buttons-div">
                <button onClick={div2button1} className="project-button">Button 1</button>
                <button onClick={div2button2} className="project-button">Button 2</button>
                <button onClick={div2button3} className="project-button">Button 3</button>
              </div>
              <div className="back-to-homepage-button-div">
                <Link
                  activeClass="active"
                  to="mobile-header-div"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  ><button className="project-button">Homepage</button>
                </Link>
              </div>


            </div>

            <div className="mobile-div-4">
              <h1 className="div-heading">Python</h1>
              <h2 className="div-heading2">{div3proj1sub}</h2>
              <p className="description-p">{div3proj1text}</p>

              <a style={{display: div3proj1button}} href="https://covidstatistics.online" target="_blank" rel="noopener noreferrer"><button className="div1-button">Check out project</button></a>
              <div className="div1-buttons-div">
                <button onClick={div3button1} className="project-button">Button 1</button>
                <button onClick={div3button2} className="project-button">Button 2</button>
                <button onClick={div3button3} className="project-button">Button 3</button>
              </div>
              <div className="back-to-homepage-button-div">
                <Link
                  activeClass="active"
                  to="mobile-header-div"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  ><button className="project-button">Homepage</button>
                </Link>
              </div>

            </div>
        </div>
    )
}

export default Homepage