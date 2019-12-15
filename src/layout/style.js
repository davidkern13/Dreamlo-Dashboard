import styled from 'styled-components';

export const Layout = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: row;
`
export const Content = styled.div`
    width:100%;
    height:100%;
    background-color:#fff;
    margin: 10px 0px 0px 0px;
`

export const MainWrap = styled.div`
    flex: 1;
    width: calc(100% - 255px);
    flex-direction: column;
`

export const ComponentContent = styled.div`
    max-width: 992px;
    margin: 0 auto;
`

