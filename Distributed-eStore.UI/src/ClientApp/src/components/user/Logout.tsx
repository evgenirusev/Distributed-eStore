import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActionCreators } from '../../state/user/userActions';

type LogoutProps = typeof userActionCreators;

const LogoutComponent: React.FC<LogoutProps> = ({ logout }) => {
    const history = useHistory();
    logout();
    history.push("/");
    // technical debt - to save time to ship
    return <></>;
}

const Logout = connect(null, userActionCreators)(LogoutComponent);
export default Logout;