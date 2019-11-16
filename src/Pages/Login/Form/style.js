import styled from 'styled-components';

export const FormLogin = styled.div`
    max-width: 360px;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

export const Form = styled.form`
    padding:0px 20px;
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
        border:1px solid #8A6FEE;
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
    color:#8A6FEE;
    outline: none;
    background-color: transparent;
    border:1px solid #8A6FEE;
    margin:50px 0px 50px 0px; 
    
    :hover {
        color:#fff;
        background-color:#8A6FEE;
    } 
`
export const Message = styled.p`
  font-size: 0.7em;
  text-align: center;
  color: #ABB3CA;
  font-weight: 400;
`;