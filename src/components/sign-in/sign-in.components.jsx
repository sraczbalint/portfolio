import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"; 
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
import { SignInContainer, TitleContainer, ButtonBarContainer } from "./sign-in.style";

class SignIn extends React.Component {
    constructor(props) {
        super();

        this.state= {
            email:'',
            password:''
        }
        }

        handleSubmit = async event => {
            event.preventDefault();

            const { email, password} = this.state;

            try {
                await auth.signInWithEmailAndPassword(email, password);
            } catch (error) {
                console.log(error);
            }

            this.setState({email: '', password:''})
        };

        handleChange = event => {
            const { value, name} = event.target;

            this.setState( { [name]:value })
        }
    
        render() {
            return (
                <SignInContainer>
                    <TitleContainer>I already have an account</TitleContainer>
                    <span>Sign in with your email and password</span>

                        <form onSubmit={this.handleSubmit}>
                            <FormInput 
                                name="email" 
                                type='email' 
                                value={this.state.email}
                                handleChange={this.handleChange}
                                label="email"  
                                required 
                            />
                            <FormInput 
                                name="password" 
                                type='password' 
                                value={this.state.password} 
                                handleChange={this.handleChange}
                                label='password' 
                                required 
                            />
                            <ButtonBarContainer>
                            <CustomButton type="submit">Sign in</CustomButton>
                            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn >
                                Sign in with Google
                            </CustomButton>
                            </ButtonBarContainer>
                        </form>
                </SignInContainer>
            )
        }
};

export default SignIn;

