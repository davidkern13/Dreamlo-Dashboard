import styled from 'styled-components';

import media from '../../MediaQuery/index';

export const Wrapper = styled.div`
    max-width: 820px;
    min-height: 400px;
    flex: 1 100%;
    display:flex;
    border-radius:10px;
    justify-content: center;
    box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.12);
    
     ${media.tablet`
        background:#f00;
    `}
`
