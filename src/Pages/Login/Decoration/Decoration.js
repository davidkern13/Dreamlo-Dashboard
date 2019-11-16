import React from "react";

import {
    Decoration,
    Title,
    DESCRIPTION2ND,
    DESCRIPTION
} from './style.js';

import {
    WELCOME_TEXT,
    DESCRIPTION_TEXT,
    SECCOND_DESCRIPTION_TEXT
} from '../../../Enums/Login/emuns'

export const LoginDecoration = () => {
    return (
        <Decoration>
            <Title>{WELCOME_TEXT}</Title>
            <DESCRIPTION2ND>{SECCOND_DESCRIPTION_TEXT}</DESCRIPTION2ND>
            <DESCRIPTION>{DESCRIPTION_TEXT}</DESCRIPTION>
        </Decoration>
    )
}

