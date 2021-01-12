import React, { Component } from 'react';
import SectionItems from './SectionItem/SectionItems';
import imageSRC1 from '../../SectionImages/img1.jpg';
import imageSRC2 from '../../SectionImages/img2.jpg';

export default class Section extends Component {
    state = {
        Elements : [{
            id: 1,
            imageSRC : `${imageSRC1}`,
            imageInfo:`In Zoa Foundation we do all our possible best 
                                in assisting people that are in need across the
                                Nation by giving alms. Remeber Service to humanity 
                                is one way to appreciate God's handwork. You can join
                                Us too as we reach out to the needy today...`
        },{
            id: 2,
            imageSRC : `${imageSRC2}`,
            imageInfo:`There are people out there waiting for 
                                one assistance and another, remember God loves a
                                cheerful giver...`
        }]
    }
    
    render() {
        const { Elements } = this.state;
        return (
            <div style={{backgroundColor: 'white'}}>
                { Elements.map(Elements => {
                     return(
                        <SectionItems key={Elements.id} Elements = {Elements} />
                     )
                     }) }
              
            </div>
        )
    }
}
