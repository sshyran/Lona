import React from "react"
import styled from "styled-components"

import colors from "../colors"
import shadows from "../shadows"
import textStyles from "../textStyles"

export default class FitContentParentSecondaryChildren extends React.Component {
  render() {



    return <Container> <View1 /> <View3 /> <View2 /> </Container>;
  }
};

let Container = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.bluegrey50,
  display: "flex",
  flex: "1 1 0%",
  flexDirection: "row",
  justifyContent: "flex-start",
  paddingTop: "24px",
  paddingRight: "24px",
  paddingBottom: "24px",
  paddingLeft: "24px"
})

let View1 = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.blue500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "60px",
  height: "60px"
})

let View3 = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.lightblue500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100px",
  height: "120px"
})

let View2 = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.cyan500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100px",
  height: "180px"
})