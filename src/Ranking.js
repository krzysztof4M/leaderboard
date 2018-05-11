import React, { Component }  from 'react'

export default class Ranking extends Component {

    

    render(){
        const { people, changeHighlightedPerson } = this.props 
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
                        />)
                }
            </div>
        )
    }
}

const PersonRow = ({id, firstName, lastName, date, points, changeHighlightedPerson}) => {

    const handleClick = () => {
        changeHighlightedPerson(id)
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
        </div>
    )
}
