import styled from "styled-components";
import { BulkiBody2, BulkiCaption, BulkiH6, BulkiSubtitle1, BulkiSubtitle2 } from "../../common/styles/tags"

export const StyledFooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.footer.hexa()};
  color: ${props => props.theme.colors.neutral.lighten(1).hexa()};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const StyledFooterFlex = styled.div`
  display: flex;
  gap: 80px;
  flex: 1 1 100%;
`

export const StyledTitleDiv = styled.div`
  flex: 0 0 60%;
  padding-top: 3%;
`

export const StyledVStack = styled.div`
  flex: 1 1;
  padding-top: 3%;
`

export const StyledFooterLogoContainer = styled.div`
  height: 110px;
  width: 50%;

  position: relative;
  filter: grayscale(100%) brightness(3);
`

export const StyledPurposeStatement = styled(BulkiSubtitle1)`
  width: 70%;
  margin-left: 6%;
  margin-top: -2%;
`

export const StyledFooterTitle = styled(BulkiH6)`
`

export const StyledFooterLink = styled(BulkiSubtitle2)`
  margin-bottom: 10px;
`
export const StyledFooterLinkColor = styled.a`
  color: ${props => props.theme.colors.neutral.lighten(0.7).hexa()};
`
export const StyledCopyrightDiv = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.footer.lighten(0.3).hexa()};
  flex: 0 0 10%;

`

export const StyledCopyrightNotice = styled(BulkiCaption)`
`

export const StyledSocials = styled.div`
  margin-left: 20%;
  margin-top: 2.5%;
`