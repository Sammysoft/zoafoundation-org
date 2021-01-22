import React from 'react';
import './Handles.css'

export default function Handles() {
    return (
        <div>
        <div className={"card-wrapper"}>
            <div className={"card-items"}>
                <i className={"fa fa-facebook fa-3x"}/>
                <p>
               You can follow us on facebook @<br/>
               <a href={"https://www.facebook.com/zoafoundation"} target={'blank'}>www.facebook.com/zoafoundation</a>
                </p>
            </div>
            <div  className={"card-items"}>
                <i className={"fa fa-instagram fa-3x"} />
                <p>
                You can follow us on instagram @<br/>
                <a href={"https://www.instagram.com/zoafoundation"} target={"blank"}>www.instagram.com/zoafoundation</a>
                </p>
            </div>
       </div>
       <div className={"card-wrapper"}>
            <div  className={"card-items"}>
                <i className={"fa fa-twitter fa-3x"} />
                <p> 
               You can follow us on twitter @<br/>
               <a href={"https://www.twitter.com/zoafoundation"} target={'blank'}>www.twitter.com/zoafoundation/</a>
                </p>
            </div>
            <div  className={"card-items"}>
                <i className={"fa fa-whatsapp fa-3x"} />
                <p>
                You can also reach us on whatsapp @<br/>
                +234-703-319-7861
                </p>
            </div>
       </div> 
  </div>
    )
}
