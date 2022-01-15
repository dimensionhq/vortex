// @ts-nocheck
import styled from 'styled-components';
import { defaultProps, defaultTheme, Theme } from '../../types';

const DevTO = styled.article`
    display: flex; 
    justify-content: flex-start; 
    width: 100%; 
    max-width: 64rem; 
    height: 100%; 
    flex-direction: column-reverse;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    @media (min-width: 1024px) { 
      flex-direction: row; 
    }
`;

DevTO.defaultProps = {
  theme: { ...defaultTheme }
}

export const Reactions = styled.div`
    display: flex;
    top: 50%;
    width: 100%;
    min-height: 100px;
    height: 10%;
    margin-left: 0px !important;
      justify-content: center;
    @media (min-width: 1024px) {
      justify-content:start;
      flex-direction: column;
      height: 100%;
      position: fixed;
      width: 10%;
    }
`

Reactions.defaultProps = {
  theme: { ...defaultTheme }
}


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.textColor};
    width: 100%;
    height: 100%;
    @media (min-width: 1024px) {
    margin-left: ${props => props.reactions ? "10%" : "0px"};
    }  
`

Main.defaultProps = {
  theme: { ...defaultTheme },
  ...defaultProps
}


export default DevTO;
