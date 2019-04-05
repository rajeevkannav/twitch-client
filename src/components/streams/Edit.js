import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from "../../actions";
import Form from './Form';

class Edit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues)
    };

    render() {
        return (
            <div>
                <h3>Edit a Stream</h3>
                <Form initialValues={
                    _.pick(this.props.stream, 'title', 'description')
                } onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, {fetchStream, editStream})(Edit);

