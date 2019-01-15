import React from "react"
import styled from "styled-components"

import colors from "../colors"
import shadows from "../shadows"
import textStyles from "../textStyles"

export default class OpacityTest extends React.Component {
  render() {


    let View$opacity
    View$opacity = 1

    if (this.props.selected) {

      View$opacity = 0.7
    }
    return (
      <View style={{ opacity: View$opacity }}>
        <View1>
          <Text>
            {"Text goes here"}
          </Text>
          <Image src={require("../assets/icon_128x128.png")} />
        </View1>
      </View>
    );
  }
};

let View = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.blue500,
  display: "flex",
  flex: "1 1 0%",
  flexDirection: "column",
  justifyContent: "flex-start",
  borderWidth: "10px",
  borderColor: colors.pink300
})

let View1 = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.red900,
  opacity: 0.8,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100px",
  height: "100px"
})

let Text = styled.span({
  textAlign: "left",
  ...textStyles.body1,
  alignItems: "flex-start",
  opacity: 0.8,
  display: "block",
  flex: "0 0 auto",
  flexDirection: "column",
  justifyContent: "flex-start"
})

let Image = styled.img({
  alignItems: "flex-start",
  opacity: 0.5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  overflow: "hidden",
  width: "90px",
  height: "60px",
  objectFit: "cover",
  position: "relative"
})