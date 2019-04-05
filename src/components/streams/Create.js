import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import Form from './Form';

class StreamCreate extends React.Component {

    onSubmit = formValues => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a stream</h3>
                <Form onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null, {
    createStream
})(StreamCreate)