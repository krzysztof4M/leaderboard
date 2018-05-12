import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class Form extends Component {

  submitForm = (data) => {
    this.props.submitFunc(data)            
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, invalid, submitSucceeded } = this.props
    return (
      <form onSubmit={handleSubmit(this.submitForm)} >
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
                  return <DatePicker dateFormat="YYYY/MM/DD" selected={props.input.value !== '' ? moment(props.input.value) : null} onChange={handleChange} placeholderText="Date" />}
                }
                type="number"
                placeholder="Date"
                validate={[required]}
              />
            <div>
          </div>
            <button type="submit" disabled={pristine || submitting || invalid}>Submit</button>
            <Link to={'/'}>Cancel</Link>
      </form>
    )
  }
}

export default reduxForm({form: 'Form'})(Form)

const required = value => (value ? undefined : 'Required')
