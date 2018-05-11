import React, { Component }  from 'react'

export default class Ranking extends Component {

    

    render(){
        const { people } = this.props 
        return (
            <div>
                {
                    people.sort((a,b)=>{return b.points-a.points}).map( ({id, firstName, lastName, points, date}) => <PersonRow key={id} firstName={firstName} lastName={lastName} date={date} points={points} />)
                }
            </div>
        )
    }
}

const PersonRow = ({firstName, lastName, date, points}) =>
    <div>
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
    </div>
