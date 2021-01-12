import React, { Component } from 'react';


class Card extends Component {
    render(){

        return(
            <div data-aos="slide-up" data-aos-duration="600" style={{backgroundColor: 'yellow', 
                        padding: '10px', width: "30%",
                        borderRadius: '10px', margin: '30px 10px',
                        flex: '1', boxShadow: '10px 7px 7px 7px #88888888',
                        height: 'auto'}}>
                <div style={{textAlign: 'center',
                            fontSize: '2.5rem'}}>

                        {this.props.CardInfo.CardHeader}

                </div>
                <div style={{fontSize: '1rem', padding: '10px'
                            }}>

                        {this.props.CardInfo.CardBody}

                </div>
            </div>
        )
        
    }
    
}

export default Card;


