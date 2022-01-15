// @ts-nocheck
import styled from "styled-components"
import { defaultProps, defaultTheme } from "../../types"

export const Header = styled.header`
  width: 100%;
  height: 400px;
  border-top-left-radius: ${props => props.image.borderRadius};
  border-top-right-radius: ${props => props.image.borderRadius};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image.src});
  @media (max-width: 600px) {
    height: 200px;
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
font-size: 1.875rem;
line-height: 2.25rem; 
font-weight: 600;
line-height: 100%;

@media (min-width: 768px) { 
  font-size: 2.25rem;
line-height: 2.5rem; 
 }
@media (min-width: 1024px) { 
  font-size: 3rem;
line-height: 1; 
 }



`