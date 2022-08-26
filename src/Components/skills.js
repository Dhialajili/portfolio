import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import "../Assets/Styles/skills.css"
import { Parallax } from "react-scroll-parallax"

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <Parallax translateX={[90, 0, "ease"]} scale={[0.75, 1]}>
          <h1>SKILLS</h1>
        </Parallax>
        <div className="Soft-skills">
          <h5 id="left">
            Wireframing & Prototyping Visual Communication Design System
          </h5>
          <h5 id="right">Responsive & Adaptive Design UI Maintenance</h5>
        </div>
        <div className="Hard-skills">
          <h5 id="left">Adobe Illustrator Adobe Photoshop Adobe XD </h5>
          <h5 id="right">
            React
            <br></br>
            Symfony
          </h5>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Skills)
