import React, { Component }  from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Ranking from './Ranking'
import { changeFilter } from '../redux/actions'

import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class MainPage extends Component {

    handleClearFilter = () => {
        this.props.changeFilter(null)
    }

    render(){
        const { people, filterDate, changeFilter } = this.props
        return (
            <React.Fragment>
                <Link to={'/add'}>Add new person</Link>
                <DatePicker
                    selected={filterDate ? moment(filterDate) : null}
                    onChange={changeFilter}
                />
                <button onClick={this.handleClearFilter}>Clear</button>    
                <Ranking people={people} />
            </React.Fragment>
        )
    }
}

export default connect(
    state=>({
        people: getFilteredPeople(state.main.data, state.main.filterDate),
        filterDate: state.main.filterDate
    }),
    { changeFilter }
)(MainPage)

const getFilteredPeople = (people, filter) => {
    return people.filter(obj => filter === null || moment(obj.date).isSame(filter))
}