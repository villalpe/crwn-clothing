import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''                
            });
        }catch (error) {
            console.error(error);
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value} )
    }

    render() {
        //const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" value={this.state.displayName} 
                    label='display Name' handleChange={this.handleChange} required />
                    <FormInput name="email" type="email" value={this.state.email} 
                    label='email' handleChange={this.handleChange} required />
                    <FormInput name="password" type="password" value={this.state.password} 
                    label='password' handleChange={this.handleChange} required />
                    <FormInput name="confirmPassword" type="password" value={this.state.confirmPassword} 
                    label='confirm Password' handleChange={this.handleChange} required />
                    <CustomButton type="submit">
                        SIGN UP
                    </CustomButton>                                                         
                </form>
            </div>
        )
    }
}

export default SignUp;