import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import "../Assets/Styles/contact.css"
import { Parallax } from "react-scroll-parallax"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import TwitterIcon from "@mui/icons-material/Twitter"
import { Link } from "@mui/material"

class Contact extends Component {
  render() {
    const { t } = this.props
    return (
      <div className="Contact">
        <Parallax translateX={[90, 0, "ease"]} scale={[0.75, 1]}>
          <h1>{t("Contact")}</h1>
        </Parallax>
        <div className="Links">
          <Link href="https://twitter.com/dhia_lajili" target="_blank">
            <TwitterIcon id="link" sx={{ fontSize: 100 }} />
          </Link>
          <Link href="https://www.instagram.com/lajilidhia/" target="_blank">
            <InstagramIcon id="link" sx={{ fontSize: 100 }} />
          </Link>
          <Link href="https://github.com/Dhialajili" target="_blank">
            <GitHubIcon id="link" sx={{ fontSize: 100 }} />
          </Link>
          <Link href="mailto:dhialajili4@gmail.com" target="_blank">
            <EmailIcon id="link" sx={{ fontSize: 100 }} />
          </Link>
          <Link
            href="https://linkedin.com/in/mohamed-dhia-lajili-116059224"
            target="_blank"
          >
            <LinkedInIcon id="link" sx={{ fontSize: 100 }} />
          </Link>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Contact)
