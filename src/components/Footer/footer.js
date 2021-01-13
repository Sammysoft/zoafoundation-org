import React from 'react';
import './Footer.css';

export default function footer() {
    return (
        <div className={"Foot-Wrapper"} style={{display: 'flex', backgroundColor: 'black', fontSize: '1rem'}}>
            <div style={{flex: 1, padding: '8px', color: 'white', borderRightColor: 'white', borderRightWidth: '2px' }}>
                <p>You can follow us on each of these social handles</p>
                <span><i className={'fa fa-facebook'}></i> Facebook @www.facebook.com/zoafoundation/</span><br/>
                <span><i className={'fa fa-twitter'}></i> twitter @www.facebook.com/zoafoundation/</span><br/>
                <span><i className={'fa fa-instagram'}></i> instagram @www.facebook.com/zoafoundation/</span><br/>
            </div>
            <div style={{flex: 1, padding: '8px', }}>
                <p>

                </p>
            </div>
        </div>
    )
}
