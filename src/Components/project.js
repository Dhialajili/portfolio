import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import "./../Assets/Styles/project.css"
import Artcorner1 from "./../Assets/Images/artcorner/artcorner1.png"
import Artcorner2 from "./../Assets/Images/artcorner/artcorner2.png"
import Artcorner3 from "./../Assets/Images/artcorner/artcorner3.png"
import Artcorner4 from "./../Assets/Images/artcorner/artcorner4.png"
import Shinos1 from "./../Assets/Images/shinos/menucard1.png"
import Shinos2 from "./../Assets/Images/shinos/menucard2.png"
import Shinos3 from "./../Assets/Images/shinos/menucard3.png"
import Shinos4 from "./../Assets/Images/shinos/menucard4.png"
import Genshin1 from "./../Assets/Images/genshin/genshin1.png"
import Genshin2 from "./../Assets/Images/genshin/genshin2.png"
import Genshin3 from "./../Assets/Images/genshin/genshin3.png"
import Genshin4 from "./../Assets/Images/genshin/genshin4.png"

function Project(props) {
  return (
    <div className="Project">
      <div className="Description">
        <h1>{props.name}</h1>
        <h4>{props.task}</h4>
        <h5>{props.detail1}</h5>
        <h5>{props.detail2}</h5>
      </div>
      <div>
        <img src={props.mockup1} alt="" />
        <img src={props.mockup2} alt="" />
        <img src={props.mockup3} alt="" />
        <img src={props.mockup4} alt="" />
      </div>
    </div>
  )
}

class Projects extends Component {
  render() {
    const { t } = this.props

    return (
      <div>
        <Project
          name={t("Artcorner")}
          task={t("Task2")}
          detail1={t("ArtcornerDetail1")}
          detail2={t("ArtcornerDetail2")}
          mockup1={Artcorner1}
          mockup2={Artcorner2}
          mockup3={Artcorner3}
          mockup4={Artcorner4}
        />
        <Project
          name={t("Shino")}
          task={t("Task2")}
          detail1={t("ShinoDetail1")}
          detail2={t("ShinoDetail2")}
          mockup1={Shinos1}
          mockup2={Shinos2}
          mockup3={Shinos3}
          mockup4={Shinos4}
        />
        <div className="Mobile-mockup">
          <Project
            name={t("Genshin")}
            task={t("Task1")}
            detail1={t("GenshinDetail1")}
            detail2={t("GenshinDetail2")}
            mockup1={Genshin1}
            mockup2={Genshin2}
            mockup3={Genshin3}
            mockup4={Genshin4}
          />
        </div>
      </div>
    )
  }
}

export default withTranslation()(Projects)
