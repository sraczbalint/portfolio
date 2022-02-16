import React, { useState} from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import { SignUpContainer, SignUpTitleContainer } from "./sign-up.style";

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({displayName:'', email:'', password:'',confirmPassword:'' });
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't mach");
            return;
        }

        signUpStart({displayName, email, password});

    }

    const handleChange = event => { 
        const { name, value} = event.target;

        setUserCredentials({... userCredentials, [name]: value});

    }

        return(
            <SignUpContainer>
                <SignUpTitleContainer>I do not have an account</SignUpTitleContainer>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                        <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='email'
                        required
                    />
                        <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                        <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    };

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null,mapDispatchToProps)(SignUp);