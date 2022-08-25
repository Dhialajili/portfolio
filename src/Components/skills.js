import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import "../Assets/Styles/skills.css"
import { Parallax } from "react-scroll-parallax"

class Skills extends Component {
  render() {
    const { t } = this.props
    return (
      <div className="Skills">
        <Parallax translateX={[90, 0, "ease"]} scale={[0.75, 1]}>
          <h1>{t("Skills")}</h1>
        </Parallax>
        <div className="Soft-skills">
          <h5 id="left">{t("SkillsDetail1")}</h5>
          <h5 id="right">{t("SkillsDetail2")}</h5>
        </div>
        <div className="Hard-skills">
          <h5 id="left">{t("SkillsDetail3")}</h5>
          <h5 id="right">
            {t("SkillsDetail4")}
            <br></br>
            {t("SkillsDetail5")}
          </h5>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Skills)
