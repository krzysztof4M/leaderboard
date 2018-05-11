import React, { Component }  from 'react'
import { connect } from 'react-redux'
import Ranking from './Ranking'

class MainPage extends Component {

    render(){
        const { people } = this.props
        return (
            <React.Fragment>
                <Ranking people={people}/>
                <LeaderDetails />
            </React.Fragment>
        )
    }
}

export default connect(state=>({people: state.main.data}))(MainPage)

const LeaderDetails = () => {
    return (
        <div>
            JÓZEF
            KOWALSKI    
        </div>
    )
}

