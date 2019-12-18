import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 1140px;
    max-width: 1140px;
  }

  @media (max-width: 1140px) {
    width: 876px;
    max-width: 876px;
  }
  @media (max-width: 876px) {
    width: 668px;
    max-width: 668px;
  }
  @media (max-width: 668px) {
    width: calc(100% - 40px);
    max-width: 80%;
  }
`

const ContainerComponent = ({ children }) => <Container>{children}</Container>

export default ContainerComponent
