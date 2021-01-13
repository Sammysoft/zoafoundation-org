import React, { Component } from 'react';
import './card.css';


class Card extends Component {
    render(){

        return(
            <div className="cards" style={{backgroundColor: 'yellow', margin: '30px 10px'}}>
                <div className="card-head" style={{textAlign: 'center',
                            fontSize: '2.5rem'}}>

                        {this.props.CardInfo.CardHeader}

                </div>
                <div className="card-body" style={{fontSize: '1rem', padding: '10px'
                            }}>

                        {this.props.CardInfo.CardBody}

                </div>
            </div>
        )
        
    }
    
}

export default Card;


