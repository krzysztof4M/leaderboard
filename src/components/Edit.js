import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Form from './Form'
import { editPerson } from '../redux/actions'

const Edit = ({person, editPerson, history: {push}}) => 
  <div>
    {
      person ?
      <Form
          initialValues={person}
          submitFunc={editPerson}
          redirectTo={push}
          title="Edit person data"
      />
      :
      <NoPersonPlaceholder />
    } 
  </div>

export default connect(
    (state,{match}) => ({
        person: state.main.data.find(obj => obj.id === match.params.personId)
    }),
    { editPerson }
)(Edit)

Edit.propTypes = {
  person: PropTypes.object.isRequired,
  editPerson: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

const NoPersonPlaceholder = () =>
  <div className="placeholder">
    <span>There is no person to edit. Sorry!</span>
    <Link to={'/'} className="button">Back</Link>
  </div>
