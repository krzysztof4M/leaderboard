import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from './Form'
import { addPerson } from './actions'

class Add extends Component {

    render(){
        return (
            <div>
                <Form submitFunc={this.props.addPerson}/>
            </div>
        )
    }
}

export default connect(null,{addPerson})(Add)