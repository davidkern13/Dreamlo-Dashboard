import styled, { keyframes }  from 'styled-components';

const bounceDelay = keyframes`
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
`

export const WrapDot = styled.div`
     margin: 0px auto 0;
     width: 70px;
     text-align: center;
`

export const Dot = styled.div`

    width: 18px;
    height: 18px;
    background-color: #ddd;
    
    border-radius: 100%;
    display: inline-block;
    
    /* Animation */
    -webkit-animation: ${bounceDelay} 1.4s infinite ease-in-out both;
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;
    animation-delay: ${props => props.delay};
`

