import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

class Form extends Component {

  submitForm = (data) => {
    console.log('test')            
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
                  component="input"
                  type="number"
                  placeholder="Date"
                  validate={[required]}
                />
            <div>
          </div>
            <button type="submit" disabled={pristine || submitting || invalid}>Submit</button>
      </form>
    )
  }
}

export default reduxForm({form: 'Form'})(Form)

const required = value => (value ? undefined : 'Required')
