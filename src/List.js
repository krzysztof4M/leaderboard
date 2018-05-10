import React, { Component }  from 'react';
import { connect } from 'react-redux'

class List extends Component {

    render(){
        console.log(this.props.data)
        return (
            <div>
                LIST
            </div>
        )
    }
}

export default connect(state=>({data: state.main.data}))(List)