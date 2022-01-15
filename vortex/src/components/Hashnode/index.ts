// @ts-nocheck
import styled from 'styled-components';
import { defaultProps, defaultTheme, Theme } from '../../types';

const Hashnode = styled.article`
    display: flex; 
    justify-content: flex-start; 
    width: 100%; 
    max-width: 64rem; 
    height: 100%; 
    flex-direction: column;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};

    @media (min-width: 1024px) { 
      position: relative;
      flex-direction: row; 
    }
`;

Hashnode.defaultProps = {
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
      width: 20%;
      right: 0;
    }
`

export const ReactionChild = styled.div`

    @media (min-width: 1024px) {
      position: fixed;
      top: 50%;
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
      margin-right: ${props => props.reactions ? "20%" : "0px"};
    }  
`

Main.defaultProps = {
  theme: { ...defaultTheme },
  ...defaultProps
}


export default Hashnode;
