import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import "../Assets/Styles/about-me.css"
import { Parallax } from "react-scroll-parallax"

class AboutMe extends Component {
  render() {
    const { t } = this.props
    return (
      <div className="About-me">
        <Parallax translateX={[90, 0, "ease"]} scale={[0.75, 1]}>
          <h1>{t("About")}</h1>
        </Parallax>

        <h5>{t("AboutDetail")}</h5>
      </div>
    )
  }
}

export default withTranslation()(AboutMe)
