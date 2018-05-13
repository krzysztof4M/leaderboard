import React from 'react'
import ReactDOM from 'react-dom'
import { PersonRow } from './Ranking'

describe('PersonRow renders', () => {
  let wrapper
  const props = {id: '1', firstName: 'John', lastName: 'Doe', date: new Date(), points: 23, deletePerson: ()=>{} }

  beforeEach(()=>{
    wrapper = shallow(<PersonRow {...props}/>) 
  })

  it('DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  })
    
  it('with output', () => {
    expect(wrapper.find('div[class="name"]').prop('value')).toEqual(`${props.firstName}`)
  })
})
