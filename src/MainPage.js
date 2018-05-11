import React, { Component }  from 'react'
import { connect } from 'react-redux'
import Ranking from './Ranking'
import { changeHighlightedPerson } from './actions'

class MainPage extends Component {

    render(){
        const { people, changeHighlightedPerson } = this.props
        return (
            <React.Fragment>
                <Ranking people={people} changeHighlightedPerson={changeHighlightedPerson}/>
                <LeaderDetails />
            </React.Fragment>
        )
    }
}

export default connect(
    state=>({people: state.main.data, highlightedPerson: getHighlightedPerson(state.main.data, "2")}),
    { changeHighlightedPerson }
)(MainPage)

const LeaderDetails = () => {
    return (
        <div>
            JÓZEF
            KOWALSKI    
        </div>
    )
}


const getHighlightedPerson = (people, id) => {
    return people.find(obj => obj.id === id)
}