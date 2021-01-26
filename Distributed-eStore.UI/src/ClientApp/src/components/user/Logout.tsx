import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActionCreators } from '../../state/user/userActions';

type LogoutProps = typeof userActionCreators;

const LogoutComponent: React.FC<LogoutProps> = ({ logout }) => {
    logout();
    return (<Redirect to="/" />);
}

const Logout = connect(null, userActionCreators)(LogoutComponent as any);
export default Logout;