import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from './Form'
import { addPerson } from '../redux/actions'

class Add extends Component {

    render(){
        return (
            <div>
                <Form 
                    submitFunc={this.props.addPerson}
                    redirectTo={this.props.history.push}
                    title="Add person data"
                />
            </div>
        )
    }
}

export default connect(null,{addPerson})(Add)