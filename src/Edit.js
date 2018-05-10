import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from './Form'

class Edit extends Component {

    prepareInitialValues = () => {
        return this.props.person
    }

    render(){
        return (
            <div>
                {
                    this.props.match.params.personId
                }
                <Form initialValues={this.prepareInitialValues()}/>
            </div>
        )
    }
}

export default connect((state,{match}) => ({person: state.main.data.find(obj => obj.id === match.params.personId)}))(Edit)
