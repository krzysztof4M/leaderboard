import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { deletePerson } from '../redux/actions'

class Ranking extends Component {

  render(){
    const { people, changeHighlightedPerson, deletePerson } = this.props 
    return (
      <div>
        <Header />
        {
          people.sort((a,b)=>{return b.points-a.points}).map( ({id, firstName, lastName, points, date}) =>
            <PersonRow
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                date={date}
                points={points}
                changeHighlightedPerson={changeHighlightedPerson}
                deletePerson={deletePerson}
            />
          )
        }
      </div>
    )
  }
}

export default connect(null, { deletePerson })(Ranking)

const PersonRow = ({id, firstName, lastName, date, points, changeHighlightedPerson, deletePerson}) => {

  const handleDelete = () => {
      deletePerson(id)
  }

  return (
    <div className="rankingRow">
      <div className="name">
        <span>{`${firstName} ${lastName}`}</span>
      </div>
      <div className="date">
        <span>{moment(date).format("YYYY/MM/DD")}</span>
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