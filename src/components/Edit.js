import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Form from './Form'
import { editPerson } from '../redux/actions'

class Edit extends Component {

    render(){
        return (
            <div>
                {
                    this.props.person ?
                    <Form
                        initialValues={this.props.person}
                        submitFunc={this.props.editPerson}
                        redirectTo={this.props.history.push}
                        title="Edit person data"
                    />
                    :
                    <NoPersonPlaceholder />
                }
                
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

const NoPersonPlaceholder = () =>
    <div>
        There is no person to edit. Sorry!
        <Link to={'/'}>Back</Link>
    </div>
