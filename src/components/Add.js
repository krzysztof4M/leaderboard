import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from './Form'
import { addPerson } from '../redux/actions'

const Add = ({addPerson, history: {push}}) =>
  <div>
    <Form 
      submitFunc={addPerson}
      redirectTo={push}
      title="Add person data"
    />
  </div>

export default connect(null,{ addPerson })(Add)

Add.propTypes = {
  addPerson: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}