import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import i18next from "i18next"
import Landing from "./Components/Home/Landing"
import AboutMe from "./Components/about-me"
import Contact from "./Components/contact"
import { ReactComponent as Disk } from "./Assets/Images/Disk.svg"
import "./Assets/Styles/app.css"
import Projects from "./Components/project"
import Skills from "./Components/skills"

class App extends Component {
  handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  render() {
    return (
      <div className="App">
        <div className="Lang">
          <div className="Lang-list">
            <h5 onClick={() => this.handleClick("en")}>EN</h5>
            <h5>|</h5>
            <h5 onClick={() => this.handleClick("fr")}>FR</h5>
          </div>
        </div>

        <Landing />
        <div className="Shape">
          <Disk style={{ position: "fixed", top: 200, left: -130 }} />
        </div>
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    )
  }
}

export default withTranslation()(App)
