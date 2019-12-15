import {USER_AUTH} from '../auth/enums';

export const userAuth = user => ({
    type: USER_AUTH,
    payload: user
})