import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import moment from 'moment'

const required = value => (value ? undefined : 'Required')

const Form = ({submitFunc, redirectTo, handleSubmit, pristine, invalid, title}) => {

  const submitForm = (data) => {
    data.points = parseInt(data.points)
    submitFunc(data)
    redirectTo('/')        
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="form">
        <h2>{title}</h2>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First name"
          validate={[required]}
        />
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder="Last name"
          validate={[required]}
        />
        <Field
          name="points"
          component="input"
          type="number"
          placeholder="Points"
          validate={[required]}
        />
        <Field
          name="date"
          component={(props)=>{
            const handleChange = (date) => {
              props.input.onChange(date)
            }
            return <DatePicker
                    dateFormat="YYYY/MM/DD"
                    selected={props.input.value !== '' ? moment(props.input.value) : null}
                    onChange={handleChange}
                    placeholderText="Date" />
            }
          }
          type="number"
          placeholder="Date"
          validate={[required]}
        />
      <div>
    </div>
    <div className="formButtons">
      <button type="submit" disabled={pristine || invalid} className="button">Submit</button>
      <Link to={'/'} className="cancelBtn">Cancel</Link>
    </div>
  </form>
  )
}

export default reduxForm({form: 'Form'})(Form)

Form.propTypes = {
  submitFunc: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}