import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import "../Assets/Styles/about-me.css"
import { Parallax } from "react-scroll-parallax"

class AboutMe extends Component {
  render() {
    return (
      <div className="About-me">
        <Parallax translateX={[90, 0, "ease"]} scale={[0.75, 1]}>
          <h1 id="PC">ABOUT ME</h1>
        </Parallax>
        <h1 id="Mobile">ABOUT ME</h1>
        <h5>
          I value simple content structure, clean design patterns, and
          thoughtful interactions. I like to code things from scratch, and enjoy
          bringing ideas to life in the browser.
        </h5>
      </div>
    )
  }
}

export default withTranslation()(AboutMe)
