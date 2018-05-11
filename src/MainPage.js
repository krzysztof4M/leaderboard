import React, { Component }  from 'react'
import { connect } from 'react-redux'
import Ranking from './Ranking'
import { changeHighlightedPerson } from './actions'

class MainPage extends Component {

    render(){
        const { people, highlightedPerson, changeHighlightedPerson } = this.props
        return (
            <React.Fragment>
                <Ranking people={people} changeHighlightedPerson={changeHighlightedPerson}/>
                <HighlightedPersonContainer highlightedPerson={highlightedPerson}/>
            </React.Fragment>
        )
    }
}

export default connect(
    state=>({
        people: state.main.data,
        highlightedPerson: getHighlightedPerson(state.main.data, state.main.highlightedPersonId)
    }),
    { changeHighlightedPerson }
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