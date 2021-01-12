import React, { Component } from 'react';
import CardItem from './Card/CardItem';

export default class Card extends Component {
    state = {
        CardInfo: [{
            id: 1,
            CardHeader: 'Vision',
            CardBody: `To contribute to building a Nigeria where all less priviledged 
                        (Motherless, orphans, physically challenged and hopeless people)
                        have access to affordable and quality welfare and equal opportunities
                        to realize their potentials`
        },{ 
            id: 2,
            CardHeader: 'Mission',
            CardBody: `The ZOA Foundation is committed to enhancing the quality
                        of life of Nigerians by supporting initiatives that improves
                        access to the general well-being of the less priviledged
                        and hopeless people to bring hope back to them in whichever
                        way we affect them positively.`
        },{ 
            id: 3,
            CardHeader: 'Goal',
            CardBody:  `Reaching out to Nigerians in need with the hand of care and comfort, through alms giving
                                and soliciting for philantropic gestures from persons with equal drive, and
                                with a compromise of assisting them with their needs...`
        }]
}
    render() {
        const { CardInfo } = this.state;
        return (
            <section style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'white'}}>
             {CardInfo.map(CardInfo =>{
                return(
                  
                        <CardItem key={CardInfo.id} CardInfo={CardInfo} />
               
                )
            })   
          }
             </section>
        )
        
    }
}
