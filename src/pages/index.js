import React from "react"
import "../styles/styles.scss"
import styled from "styled-components"

//Import Components
import Header from "../components/header"
import Hero from "../components/hero"
import ContainerComponent from "../components/container"

const IndexPage = () => (
  <ContainerComponent>
    <Header />
    <Hero />
  </ContainerComponent>
)

export default IndexPage
