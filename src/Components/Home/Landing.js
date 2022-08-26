import React, { Component } from "react"
import { withTranslation } from "react-i18next"

import "../../Assets/Styles/Landing.css"

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1>Mohamed Dhia Lajili</h1>
        <h5>Frontend Developer & UI/UX Designer.</h5>
      </div>
    )
  }
}

export default withTranslation()(Landing)
