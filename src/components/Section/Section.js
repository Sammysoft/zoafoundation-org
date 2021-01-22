import React, { Component } from 'react';
import SectionItems from './SectionItem/SectionItems';

export default class Section extends Component {
    state = {
        Elements : [{
            id: 1,
            imageSRC : `https://media.gettyimages.com/photos/person-holding-and-delivery-christmas-gift-picture-id1185900856?k=6&m=1185900856&s=612x612&w=0&h=c933lEie03mOvihiX8tpl5mIyMb7aNuLJwuBMsUPdLQ=`,
            imageInfo:`In Zoa Foundation we do all our possible best 
                                in assisting people that are in need across the
                                Nation by giving alms. Remeber Service to humanity 
                                is one way to appreciate God's handwork. You can join
                                Us too as we reach out to the needy today...`
        },{
            id: 2,
imageSRC : `https://media.gettyimages.com/photos/mother-and-daughter-celebrating-a-birthday-together-picture-id862345518?k=6&m=862345518&s=612x612&w=0&h=lCHP_iNGj2z8AWUVSNNxEfql_sUH3PWH7x0NYLxY8Fw=`,
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
