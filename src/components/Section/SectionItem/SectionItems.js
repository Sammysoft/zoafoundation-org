import React, { Component } from 'react';
import './Section.css';

export default class SectionItems extends Component {
    render() {
        
        return (
            <div  style={{width: '100%', display: 'flex', margin: '30px 10px', }}>
               <div style={{flex: 1,boxShadow: '8px 8px 10px 10px #88888888'}}>
               <img src={this.props.Elements.imageSRC} 
                        style={{width: '100%', borderRadius:'8px' }} alt={'More description...'}/>
               </div> 
                <p className="Image-info" style={{flex: 1, padding: '15px'}}>
                        {this.props.Elements.imageInfo}
                </p>
            </div>
        )
    }
}
