import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"; 
import { SignInContainer, TitleContainer, ButtonBarContainer } from "./sign-in.style";
import { googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'


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
            const { emailSignInStart } = this.props;
            const { email, password} = this.state;

            emailSignInStart(email, password);
        };

        handleChange = event => {
            const { value, name} = event.target;

            this.setState( { [name]:value })
        }
    
        render() {
            const {googleSignInStart} = this.props;
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
                            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >
                                Sign in with Google
                            </CustomButton>
                            </ButtonBarContainer>
                        </form>
                </SignInContainer>
            );
        }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(null, mapDispatchToProps)(SignIn);

