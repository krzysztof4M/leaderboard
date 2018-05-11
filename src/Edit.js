import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from './Form'
import { editPerson } from './actions'

class Edit extends Component {

    prepareInitialValues = () => {
        return this.props.person
    }

    render(){
        return (
            <div>
                <Form initialValues={this.props.person} submitFunc={this.props.editPerson}/>
            </div>
        )
    }
}

export default connect(
    (state,{match}) => ({
        person: state.main.data.find(obj => obj.id === match.params.personId)
    }),
    { editPerson }
)(Edit)
