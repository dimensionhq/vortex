// @ts-nocheck
import styled from "styled-components"
import { defaultProps, defaultTheme } from "../../types"

export const Header = styled.header`
  width: 100%;
  border: ${props => props.image.borderRadius};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image.src});
  @media (min-width: 600px) {
    height: 200px;
  }
  @media (max-width: 1024px) {
    height: 440px;
  }
  @media (min-width: 1024px) {
    min-height: 540px;
  }
`

Header.defaultProps = {
  theme: { ...defaultTheme },
  ...defaultProps
}

export const Author = styled.div`
    display: flex;
    flex-direction:row;
    gap: 6px;
    /* width: 00%; */
    height: 40px;
`

export const Title = styled.h1`
margin-bottom: 0.5rem; 
margin: 0px;
font-size: 1.875rem;
line-height: 2.25rem; 
font-weight: 600;

@media (min-width: 768px) { 
  font-size: 2.25rem;
line-height: 2.5rem; 
 }
@media (min-width: 1024px) { 
  font-size: 3rem;
line-height: 1; 
 }



`