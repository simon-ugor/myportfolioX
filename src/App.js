import { useState } from "react"
import MobileHeader from "./components/MobileHeader.js"
import MobileAboutMe from "./components/MobileAboutMe.js"
import MobileMyCV from "./components/MobileMyCV.js"
import MobileContactMe from "./components/MobileContactMe.js"

// importing react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./components/Homepage.js"

function App() {

  const [mobileDiv, setMobileDiv] = useState("")
  const [menuDisplay, setMenuDisplay] = useState("none")

  const mobileMenu = (e) => {
    e.preventDefault()

    //set state of mobile to display none
    setMobileDiv("none")

    //set state of menu to display
    setMenuDisplay("") 
  }

  const menuCloseClick = () => {

    //set state of menu to display none
    setMenuDisplay("none")

    //set state of moblie to display
    setMobileDiv("")
  }

  // do homepage as a component and useEffect to close menu there

  return (
    <Router>
      <div className="App">
      
        <div className="menu-div" style={{display: menuDisplay}}>
            <div className="close-div">
                <button onClick={menuCloseClick} className="x-button">x</button>
            </div>
            <ul className="menu-list">
              <Link className="link-menu" to="/"><li className="list-element">&#x2022; Homepage</li></Link>
              <Link className="link-menu" to="/aboutme"><li className="list-element">&#x2022; About Me</li></Link>
              <Link className="link-menu" to="/mycv"><li className="list-element">&#x2022; My CV</li></Link>
              <Link className="link-menu" to="/contactme"><li className="list-element">&#x2022; Contact Me</li></Link>
            </ul>
        </div>
        <Switch>
        <div className="Mobile" style={{display: mobileDiv}}>
          
          
          <Route exact path="/">
            <MobileHeader menu={mobileMenu} />
            <Homepage menuClose={menuCloseClick} />
          </Route>

          <Route path="/aboutme">
              <MobileHeader menu={mobileMenu} />
              <MobileAboutMe menuClose={menuCloseClick} />
          </Route>

          <Route path="/mycv">
            <MobileHeader menu={mobileMenu} />
            <MobileMyCV menuClose={menuCloseClick} />
          </Route>

          <Route path="/contactme">
            <MobileHeader menu={mobileMenu} />
            <MobileContactMe menuClose={menuCloseClick} />
          </Route>
        

          
            

        </div>

        <div className="Desktop">
          Desktop
        </div>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
