import React from "react"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "vitor-pinto.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container--full-width">
      <div className="hero-wrapper">
        <div className="hero-img"></div>
        <Header />
      </div>
    </div>
  )
}
export default Hero
