import React, { Component } from 'react';

export default class Edit extends Component {

    render(){
        return (
            <div>
                EDIT
                {
                    this.props.match.params.personId
                }
            </div>
        )
    }
}