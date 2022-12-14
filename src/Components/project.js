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
    return (
      <div>
        <Project
          name="ArtCorner"
          task="FULLSTACK"
          detail1="A web application for artist to sell and showcase their artworks and allows professionals to comission artist and reserve artworks."
          detail2="Any users can register, login and request a password reset via email. A user can be either an artist, a professional or an amateur with the existance of an administrator."
          mockup1={Artcorner1}
          mockup2={Artcorner2}
          mockup3={Artcorner3}
          mockup4={Artcorner4}
        />
        <Project
          name="Shino's"
          task="FULLSTACK"
          detail1="A web application for a restaurant to add it's dishes to a menu card and manage said menu."
          detail2="An employee of the restaurant can login to add and manage dishes and orders. A customer can browes through the dishes, make an order and contact the restaurant."
          mockup1={Shinos1}
          mockup2={Shinos2}
          mockup3={Shinos3}
          mockup4={Shinos4}
        />
        <div className="Mobile-mockup">
          <Project
            name="Genshin.DD"
            task="UI DESIGN"
            detail1="Design of GENSHIN.DD a Database and Tier List for the GENSHIN impact game for PC, Switch, Playstation 4, and mobile game app on iOS and Android."
            detail2="This project is not affiliated with or endorsed by HOYOVERSE."
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
