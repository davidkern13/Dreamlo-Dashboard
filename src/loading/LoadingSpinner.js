import React from 'react';
import './style.js';

import {
    WrapDot,
    Dot
} from './style.js';

const LoadingSpinner = () => {
    return (
        <WrapDot>
            <Dot delay="0.15s"/>
            <Dot delay="0.30s"/>
            <Dot delay="0.45s"/>
        </WrapDot>
    );
}

export default LoadingSpinner;