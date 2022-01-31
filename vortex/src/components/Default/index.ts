// @ts-nocheck
import styled from 'styled-components';
import { defaultProps, defaultTheme, Theme } from '../../types';

const Default = styled.article`
    justify-content: flex-start; 
    width: 100%; 
    max-width: 80rem; 
    height: 100%; 
    flex-direction: column-reverse;
    color: ${props => props.theme.textColor};
    @media (min-width: 1024px) { 
      position: relative;
      flex-direction: row; 
    }
`;

Default.defaultProps = {
  theme: { ...defaultTheme }
}


export const Reactions = styled.div`
    display: flex;
    width: 100%;
    min-height: 100px;
    margin-left: 0px !important;
    justify-content: center;

    @media (min-width: 1024px) {
      position: absolute;

      justify-content:start;
      flex-direction: column;
      height: 100%;
      width: 10%;
      right: 0;
    }
`

Reactions.defaultProps = {
  theme: { ...defaultTheme }
}

export const ReactionChild = styled.div`

    @media (min-width: 1024px) {
      position: fixed;
      top: 50%;
    }
`

export const Body = styled.div`
      display: flex;
      flex-direction: column;
  background-color: ${props => props.theme.bgColor};
    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: 0.40fr 1fr 0.35fr;
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
`
Body.defaultProps = {
  theme: { ...defaultTheme },
  ...defaultProps
}
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.textColor};
    width: 100%;
    height: 100%;
`

Main.defaultProps = {
  theme: { ...defaultTheme },
  ...defaultProps
}


export const BodyConfig = styled.div`
width: 75%;
`

export const Category = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.linkColor};
  text-transform: capitalize;
`

Category.defaultProps = {
  theme: { ...defaultTheme }
}
export default Default;
