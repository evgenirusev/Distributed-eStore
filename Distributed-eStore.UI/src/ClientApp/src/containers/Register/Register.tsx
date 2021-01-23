import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActionCreators, UserRegistrationData } from '../../state/user/userActions';
import { IApplicationState } from "../../state/index";
import { IUserState } from '../../state/user/userTypes';
import "./Register.css";

type RegisterPageProps = typeof userActionCreators & {
    userState: IUserState
};

type RegisterPageState = {
    user: UserRegistrationData,
    submitted: boolean
}

class RegisterPage extends React.Component<RegisterPageProps, RegisterPageState> {
    constructor(props: RegisterPageProps) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                role: 'admin'
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { user, submitted } = this.state;

        return this.props.userState.isLoggedIn
            ? (<Redirect to="/login" />)
            : (<div className = "row" >
                <div className="col-md-8 register__container">
                    <h2>Register</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                            {submitted && !user.firstName &&
                                <div className="help-block">First Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                            {submitted && !user.lastName &&
                                <div className="help-block">Last Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                            {submitted && !user.email &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                            {submitted && !user.password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Register</button>
                            <Link to="/login" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect((state: IApplicationState) => { return { userState: state.user } }, userActionCreators)(RegisterPage as any);