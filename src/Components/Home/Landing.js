import React, { Component } from "react"
import { withTranslation } from "react-i18next"

import "../../Assets/Styles/Landing.css"

class Landing extends Component {
  render() {
    const { t } = this.props

    return (
      <div className="Landing">
        <h1>{t("Name")}</h1>
        <h5>{t("AboutName")}</h5>
      </div>
    )
  }
}

export default withTranslation()(Landing)
