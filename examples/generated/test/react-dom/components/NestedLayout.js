import React from "react"
import styled from "styled-components"

import colors from "../colors"
import shadows from "../shadows"
import textStyles from "../textStyles"
import LocalAsset from "../images/LocalAsset"

export default class NestedLayout extends React.Component {
  render() {



    return (
      <View>
        <TopRow>
          <Column1>
            <View1>
              <LocalAssetLocalAssetWrapper>
                <LocalAsset />
              </LocalAssetLocalAssetWrapper>
            </View1>
            <View2>
              <LocalAssetLocalAsset2Wrapper>
                <LocalAsset />
              </LocalAssetLocalAsset2Wrapper>
            </View2>
            <View3>
              <LocalAssetLocalAsset3Wrapper>
                <LocalAsset />
              </LocalAssetLocalAsset3Wrapper>
            </View3>
          </Column1>
          <Column2>
            <View4>
              <LocalAssetLocalAsset4Wrapper>
                <LocalAsset />
              </LocalAssetLocalAsset4Wrapper>
            </View4>
            <View5>
              <LocalAssetLocalAsset5Wrapper>
                <LocalAsset />
              </LocalAssetLocalAsset5Wrapper>
            </View5>
            <View6>
              <LocalAssetLocalAsset6Wrapper>
                <LocalAsset />
              </LocalAssetLocalAsset6Wrapper>
            </View6>
          </Column2>
          <Column3>
            <View7>
              <LocalAssetLocalAsset7Wrapper>
                <LocalAsset />
              </LocalAssetLocalAsset7Wrapper>
            </View7>
            <View8>
              <LocalAssetLocalAsset8Wrapper>
                <LocalAsset />
              </LocalAssetLocalAsset8Wrapper>
            </View8>
            <View9>
              <LocalAssetLocalAsset9Wrapper>
                <LocalAsset />
              </LocalAssetLocalAsset9Wrapper>
            </View9>
          </Column3>
        </TopRow>
        <BottomRow>
          <Column4>
            <View10>
              <LocalAsset />
            </View10>
            <View11>
              <LocalAsset />
            </View11>
            <View12>
              <LocalAsset />
            </View12>
          </Column4>
          <Column5>
            <View13>
              <LocalAsset />
            </View13>
            <View14>
              <LocalAsset />
            </View14>
            <View15>
              <LocalAsset />
            </View15>
          </Column5>
          <Column6>
            <View16>
              <LocalAsset />
            </View16>
            <View17>
              <LocalAsset />
            </View17>
            <View18>
              <LocalAsset />
            </View18>
          </Column6>
        </BottomRow>
      </View>
    );
  }
};

let View = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flex: "1 1 0%",
  flexDirection: "column",
  justifyContent: "flex-start"
})

let TopRow = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flex: "0 0 auto",
  flexDirection: "row",
  justifyContent: "flex-start"
})

let Column1 = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "150px"
})

let View1 = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "150px",
  height: "150px"
})

let LocalAssetLocalAssetWrapper = styled.div({
  alignItems: "flex-start",
  alignSelf: "stretch",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  justifyContent: "flex-start"
})

let View2 = styled.div({
  alignItems: "flex-start",
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "150px",
  height: "150px"
})

let LocalAssetLocalAsset2Wrapper = styled.div({
  alignItems: "center",
  alignSelf: "stretch",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  justifyContent: "flex-start"
})

let View3 = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  width: "150px",
  height: "150px"
})

let LocalAssetLocalAsset3Wrapper = styled.div({
  alignItems: "flex-end",
  alignSelf: "stretch",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  justifyContent: "flex-start"
})

let Column2 = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "150px"
})

let View4 = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "150px",
  height: "150px"
})

let LocalAssetLocalAsset4Wrapper = styled.div({
  alignItems: "flex-start",
  alignSelf: "stretch",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  justifyContent: "center"
})

let View5 = styled.div({
  alignItems: "center",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "150px",
  height: "150px"
})

let LocalAssetLocalAsset5Wrapper = styled.div({
  alignItems: "center",
  alignSelf: "stretch",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  justifyContent: "center"
})

let View6 = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  width: "150px",
  height: "150px"
})

let LocalAssetLocalAsset6Wrapper = styled.div({
  alignItems: "flex-end",
  alignSelf: "stretch",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  justifyContent: "center"
})

let Column3 = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "150px"
})

let View7 = styled.div({
  alignItems: "flex-end",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "150px",
  height: "150px"
})

let LocalAssetLocalAsset7Wrapper = styled.div({
  alignItems: "flex-start",
  alignSelf: "stretch",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  justifyContent: "flex-end"
})

let View8 = styled.div({
  alignItems: "flex-end",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "150px",
  height: "150px"
})

let LocalAssetLocalAsset8Wrapper = styled.div({
  alignItems: "center",
  alignSelf: "stretch",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  justifyContent: "flex-end"
})

let View9 = styled.div({
  alignItems: "flex-end",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  width: "150px",
  height: "150px"
})

let LocalAssetLocalAsset9Wrapper = styled.div({
  alignItems: "flex-end",
  alignSelf: "stretch",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  justifyContent: "flex-end"
})

let BottomRow = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flex: "0 0 auto",
  flexDirection: "row",
  justifyContent: "flex-start"
})

let Column4 = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "150px"
})

let View10 = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: "150px",
  height: "150px"
})

let View11 = styled.div({
  alignItems: "center",
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: "150px",
  height: "150px"
})

let View12 = styled.div({
  alignItems: "flex-end",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: "150px",
  height: "150px"
})

let Column5 = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "150px"
})

let View13 = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "150px",
  height: "150px"
})

let View14 = styled.div({
  alignItems: "center",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "150px",
  height: "150px"
})

let View15 = styled.div({
  alignItems: "flex-end",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "150px",
  height: "150px"
})

let Column6 = styled.div({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "150px"
})

let View16 = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "150px",
  height: "150px"
})

let View17 = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "150px",
  height: "150px"
})

let View18 = styled.div({
  alignItems: "flex-end",
  backgroundColor: colors.grey50,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "150px",
  height: "150px"
})