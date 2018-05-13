import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { deletePerson } from '../redux/actions'

const Ranking = ({ people, deletePerson }) =>
  <div>
    <Header />
    {
      people.sort((a,b)=>{return b.points-a.points}).map( ({id, firstName, lastName, points, date}) =>
        <PersonRow
          key={id}
          id={id}
          firstName={firstName}
          lastName={lastName}
          date={moment(date)}
          points={points}
          deletePerson={deletePerson}
        />
      )
    }
  </div>

export default connect(null, { deletePerson })(Ranking)

Ranking.propTypes = {
  people: PropTypes.array.isRequired,
  deletePerson: PropTypes.func.isRequired
}

const PersonRow = ({id, firstName, lastName, date, points, deletePerson}) => {

  const handleDelete = () => {
      deletePerson(id)
  }

  return (
    <div className="rankingRow">
      <div className="name">
        <span>{`${firstName} ${lastName}`}</span>
      </div>
      <div className="date">
        <span>{date.format("YYYY/MM/DD")}</span>
      </div>
      <div className="points">
        <span>{points}</span>
      </div>
      <div className="edit">
        <Link to={`/edit/${id}`} className="button">Edit</Link>
      </div>
      <div className="delete">
        <button onClick={handleDelete} className="button">Delete</button>
      </div>
    </div>
  )
}

PersonRow.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  points: PropTypes.number.isRequired,
  deletePerson: PropTypes.func.isRequired
}

const Header = () => 
  <div  className="rankingRow header">
    <div className="name">
        <span>Name</span>
      </div>
      <div className="date">
        <span>Date</span>
      </div>
      <div className="points">
        <span>Points</span>
      </div>
      <div />
  </div>