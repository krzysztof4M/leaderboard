import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Ranking from './Ranking'
import { changeFilter } from '../redux/actions'

// selector
const getFilteredPeople = (people, filter) => {
  return people.filter(obj => filter === null || moment(obj.date).isSame(filter))
}

export const MainPage = ({people, filterDate, changeFilter}) => {

  const handleClearFilter = () => {
    changeFilter(null)
  }

  return (
    <React.Fragment>
      <TopBar
        selected={filterDate ? moment(filterDate) : null}
        changeFilter={changeFilter}
        handleClearFilter={handleClearFilter}
      />
      <Ranking people={people} />
    </React.Fragment>
  )
}

export default connect(
    state=>({
        people: getFilteredPeople(state.main.data, state.main.filterDate),
        filterDate: state.main.filterDate
    }),
    { changeFilter }
)(MainPage)

MainPage.propTypes = {
  people: PropTypes.array.isRequired,
  filterDate: PropTypes.object,
  changeFilter: PropTypes.func.isRequired
}

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

TopBar.propTypes = {
  selected: PropTypes.object,
  handleClearFilter: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired
}