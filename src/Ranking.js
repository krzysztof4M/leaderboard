import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePerson } from './actions'

class Ranking extends Component {

    render(){
        const { people, changeHighlightedPerson, deletePerson } = this.props 
        return (
            <div>
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
                        />)
                }
            </div>
        )
    }
}

export default connect(null, { deletePerson })(Ranking)

const PersonRow = ({id, firstName, lastName, date, points, changeHighlightedPerson, deletePerson}) => {

    const handleClick = () => {
        changeHighlightedPerson(id)
    }

    const handleDelete = () => {
        deletePerson(id)
    }

    return (
        <div onClick={handleClick}>
            <div>
                {firstName}
            </div>
            <div>
                {lastName}
            </div>
            <div>
                {date}
            </div>
            <div>
                {points}
            </div>
            <div>
                <Link to={`/edit/${id}`}>Edit</Link>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
