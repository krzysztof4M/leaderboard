import React, { Component }  from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Ranking from './Ranking'
import { changeHighlightedPerson, changeFilter } from './actions'

import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class MainPage extends Component {

    handleChange = (date) => {
        this.props.changeFilter(moment(date))
    }

    render(){
        const { people, highlightedPerson, filterDate, changeHighlightedPerson } = this.props
        return (
            <React.Fragment>
                <DatePicker
                    selected={filterDate ? moment(filterDate) : null}
                    onChange={this.handleChange}
                />    
                <Ranking people={people} changeHighlightedPerson={changeHighlightedPerson}/>
                <HighlightedPersonContainer highlightedPerson={highlightedPerson}/>
            </React.Fragment>
        )
    }
}

export default connect(
    state=>({
        people: getFilteredPeople(state.main.data, state.main.filterDate),
        highlightedPerson: getHighlightedPerson(state.main.data, state.main.highlightedPersonId),
        filterDate: state.main.filterDate
    }),
    { changeHighlightedPerson, changeFilter }
)(MainPage)

const HighlightedPersonContainer = ({highlightedPerson}) => {
    if(!highlightedPerson){
        return <div>Placeholder</div>
    }
    return (
        <HighlightedPerson 
            firstName={highlightedPerson.firstName}
            lastName={highlightedPerson.lastName}
            date={highlightedPerson.date}
            points={highlightedPerson.points}
        />
    )
}

const HighlightedPerson = ({ firstName, lastName, date, points }) =>  
    <div>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{date}</div>
        <div>{points}</div>
    </div>


const getHighlightedPerson = (people, id) => {
    return people.find(obj => obj.id === id)
}

const getFilteredPeople = (people, filter) => {
    return people.filter(obj => filter === null || moment(obj.date).isSame(filter))
}