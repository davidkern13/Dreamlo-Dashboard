import { DREAMLO_PUBLIC_CODE, DREAMLO_PRIVATE_CODE } from './enums';

export const dreamloPublicCode = public_code => ({
    type: DREAMLO_PUBLIC_CODE,
    payload: public_code
})

export const dreamloPrivateCode = private_code => ({
    type: DREAMLO_PRIVATE_CODE,
    payload: private_code
})