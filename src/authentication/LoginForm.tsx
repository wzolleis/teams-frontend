import * as React from "react";
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../shared/Validator';
import * as _ from 'lodash';

interface LoginProps {
    email?: string;
    password?: string;
}

interface LoginErrors {
    password? : string;
    email? : string;
}

interface LoginState {
    formData: {
        email?: string;
        password?: string;
    };
    errors: LoginErrors; // Contains login field errors
    formSubmitted: boolean; // Indicates submit status of login form
    loading: boolean; // Indicates in progress state of login form
}

export class LoginForm extends React.Component<LoginProps, LoginState> {
    state = {
        formData: {
            email: "",
            password: ""
        },
        errors: {
            email: undefined,
            password: undefined
        },
        formSubmitted: false,
        loading: false
    };

    render() {
        return (
            <form className={"container gridcontainer"}>
                <p className="h4 text-center mb-4">Sign in</p>
                <p/>
                <input
                    value={this.state.formData.email}
                    onChange={event => this.handleInputChange(event)}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control grid-form-input"
                />
                <br/>
                <input type="password"
                       id="password"
                       name="password"
                       className="form-control grid-form-input"
                       placeholder="Passwort"
                />
                <p/>
                <div className="text-center mt-4">
                    <button onSubmit={this.login} className={"btn btn-primary form-control grid-form-input"}
                            type="submit">Login
                    </button>
                </div>
            </form>
        );
    }


    login = (e: any) => {

        e.preventDefault();

        const errors: LoginErrors = this.validateLoginForm();

        if(_.isEmpty(errors)){
            alert("You are successfully signed in...");
            window.location.reload()
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    };

    private handleInputChange = (event: any) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let {formData} = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    };

    private validateLoginForm = () => {

        let errors: LoginErrors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return {};
        } else {
            return errors;
        }
    }

}