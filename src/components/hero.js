import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Image from "./image"

const HeroComponent = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  top: 80px;
  background-color: white;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
const Row = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MainText = styled.p`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50%;
  height: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 6.2rem;
  color: white;
  letter-spacing: 25px;
  text-transform: uppercase;
  font-weight: 700;
  mix-blend-mode: difference;
  z-index: 9;
  @media (max-width: 1440px) {
    font-size: 5.2rem;
  }
  @media (max-width: 1140px) {
    font-size: 4.6rem;
  }
  @media (max-width: 876px) {
    font-size: 4.2rem;
  }
`

const MainImage = styled.div`
  position: relative;
  width: 576px;
  margin: 0 40px;
  @media (max-width: 1440px) {
    width: 426px;
  }
  @media (max-width: 1140px) {
    width: 386px;
  }
  @media (max-width: 876px) {
    width: 326px;
  }
`

const ImageLeft = styled(MainImage)`
  width: 326px;
  top: 50px;
  @media (max-width: 1440px) {
    width: 286px;
  }
  @media (max-width: 1140px) {
    width: 256px;
  }
  @media (max-width: 876px) {
    width: 226px;
  }
`

const ImageRight = styled(ImageLeft)`
  top: unset;
  bottom: 50px;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      vitor: file(relativePath: { eq: "vitor-pinto.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eliza: file(relativePath: { eq: "eliza-szablinska.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      hisu: file(relativePath: { eq: "hisu-lee.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <HeroComponent>
      <Container>
        <Row>
          <ImageLeft>
            <Img fluid={data.eliza.childImageSharp.fluid} />
          </ImageLeft>
          <MainText>Foto Studio Adam Chrapek</MainText>
          <MainImage>
            <Img fluid={data.vitor.childImageSharp.fluid} />
          </MainImage>
          <ImageRight>
            <Img fluid={data.hisu.childImageSharp.fluid} />
          </ImageRight>
        </Row>
      </Container>
    </HeroComponent>
  )
}

export default Hero
