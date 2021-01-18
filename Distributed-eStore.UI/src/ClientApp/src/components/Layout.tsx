import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../containers/NavMenu/NavMenu';
import { Footer } from './Footer/Footer';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <NavMenu />
                <Container fluid={ true }>
                    {this.props.children}
                    <Footer/>
                </Container>
            </React.Fragment>
        );
    }
}