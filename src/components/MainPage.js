import React, { Component }  from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Ranking from './Ranking'
import { changeFilter } from '../redux/actions'

import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const getFilteredPeople = (people, filter) => {
    return people.filter(obj => filter === null || moment(obj.date).isSame(filter))
}

class MainPage extends Component {

    handleClearFilter = () => {
        this.props.changeFilter(null)
    }

    render(){
        const { people, filterDate, changeFilter } = this.props
        return (
            <React.Fragment>
                <TopBar
                    selected={filterDate ? moment(filterDate) : null}
                    changeFilter={changeFilter}
                    handleClearFilter={this.handleClearFilter}
                />
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

const TopBar = ({selected, changeFilter, handleClearFilter}) => 
    <div className="topBar">
        <Link to={'/add'} className="button">Add new person</Link>
        <div className="datePicker">
            <DatePicker
                dateFormat="YYYY/MM/DD"
                selected={selected}
                onChange={changeFilter}
                placeholderText="Choose date to filter results"
                className="filter"
            />
            <a onClick={handleClearFilter} className="clearBtn">Clear</a>
        </div>
    </div>