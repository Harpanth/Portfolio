import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Computer Engineering" where="IIIT Una" from="July 2019" to="Present"/>
            <Widecard title="HSC" where="B.B.S.B secondary School" from="2011" to="2018"/>
            </div>
            )
        }
    }
    
export default Education
    