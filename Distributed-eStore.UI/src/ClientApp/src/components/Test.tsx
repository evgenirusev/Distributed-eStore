import * as React from 'react';

class Test extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <h1>Test</h1>
                <p>This is a simple example of a React component.</p>
                <button type="button" className="btn btn-primary btn-lg">
                    TEST
                </button>
            </React.Fragment>
        );
    }
};