import styled from 'styled-components';

export const Decoration = styled.div`
    max-width: 460px;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: url(https://images.unsplash.com/photo-1443304895043-ef30921332c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 50%;
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  text-shadow: -1px 1px #2D4A80;
`;

export const DESCRIPTION2ND = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: #ffffff;
  margin:15px 0px;
  text-shadow: -1px 1px #2D4A80;
`;

export const DESCRIPTION = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  text-shadow: -1px 1px #2D4A80;
`;