import { UserActionTypes } from "./user.types";


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSucces = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCES,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type:UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type:UserActionTypes.SIGN_OUT_START
});

export const signOutSucces = () => ({
    type:UserActionTypes.SIGN_OUT_SUCCES
});

export const signOutFailure = (error) => ({
    type:UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (userCredentials) => ({
    type:UserActionTypes.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSucces = ({ user,additionalData}) => ({
    type:UserActionTypes.SIGN_UP_SUCCES,
    payload: { user,additionalData }
});

export const signUpFailure = (error) => ({
    type:UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});