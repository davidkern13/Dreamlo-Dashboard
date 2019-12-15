import React from 'react';

import { Link } from 'react-router-dom';

import { Wrap, Ul, Li } from './style.js';

function SideLinks(props){
    return (
        <Wrap>
            <Ul>
                {props.children.map(item =><Li key={item} ><Link to={item}>{item}</Link></Li>)}
            </Ul>
        </Wrap>
    )
}

export default SideLinks;