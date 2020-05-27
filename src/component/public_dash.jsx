import React, {Component} from 'react';
import uni from "../pics/people-2562626_1920.jpg";

class PublicDash extends Component {
    render() {
        return (
            <div>
                <div className="row-s">
                    <img src={uni} className="img-fluid" alt="Responsive image"/>
                </div>
            </div>
        );
    }
}

export default PublicDash;