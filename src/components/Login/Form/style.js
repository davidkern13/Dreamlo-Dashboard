import styled from 'styled-components';

export const FormLogin = styled.div`
    max-width: 360px;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding:0px 20px;
    background-color: #FDFFFD;
    border-left: 1px solid #EDEDED;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const Wrap = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: row;
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    height: 34px;
    border-radius: 100px;
    border: 1px solid #eee;
    outline: none;
    color: #8F98B4;
    font-size: 0.8em;
    padding: 0px 0px 0px 15px;
    
    :focus {
        border:1px solid #006CFF;
    } 
    
`

export const Label = styled.label`
    width: 100%;
    align-items: end;
    display: flex;
    color: #ABB3CA;
    font-size: 0.7em;
    margin: 20px 0px 5px 15px;
`

export const Button = styled.button`
    width:150px;
    height:40px;
    cursor: pointer;
    border-radius:100px;
    color:#006CFF;
    outline: none;
    background-color: transparent;
    border:1px solid #006CFF;
    margin: 30px 0px 30px 0px;
    transition: all 0.2s;
     
    :hover {
        color:#fff;
        background-color:#006CFF;
    } 
`
export const Message = styled.p`
  font-size: 0.7em;
  text-align: center;
  color: #ABB3CA;
  font-weight: 400;
`;

export const TitleLogin = styled.h1`
  font-size: 2em;
  color: #026BFF;
  font-weight: 500;
  margin: 0px 0px 10px 15px;
  font-family: Calistoga;
`;

export const TitleTo = styled.h1`
  font-size: 1em;
  text-align: left;
  color: #026BFF;
  font-weight: 500;
  font-family: Calistoga;
`;