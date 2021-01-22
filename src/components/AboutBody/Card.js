import React from 'react'
import './card.css';

export default function Card() {
    return (
      <div>
            <div className={"card-wrapper"}>
                <div className={"card-items"}>
                    <i className={"fa fa-handshake-o fa-3x"}/>
                    <p>
                    We partner with people across Nigeria, who are driven by the urge to affect the lives of those in need by sharing gifts and materials needed in form of money, substancial gifts and life sustaining materials through donations and philantrophic gestures...
                    ZOA Foundation is a non-profit oriented organization, Our aim is to bring smiles on the faces of those who are suffering from tragic circumstances.
                    </p>
                </div>
                <div  className={"card-items"}>
                    <i className={"fa fa-heart-o fa-3x"} />
                    <p>
                    The major target of this Foundation is to touch the hearts of needy people and less priviledged across the Nation Nigeria, Our major target is Orphanage homes, physically challenged, widows and widowers as well as those that are facing serious challenges with meeting basic life sustaining demands.
                    </p>
                </div>
           </div>
           <div className={"card-wrapper"}>
                <div  className={"card-items"}>
                    <i className={"fa fa-road fa-3x"} />
                    <p> 
                    We have agents across the Nation who helps to keep watch and as well gather background information on those in need and what they may be needing, you can join us enlarge this network.
                    </p>
                </div>
                <div  className={"card-items"}>
                    <i className={"fa fa-signing fa-3x"} />
                    <p>
                    The gifts are being recieved with joyful heart and happiness, by those in need of it. Join Us in reaching out to people in need, no matter your contributions it is worth it and God loves a cheerful giver.
                    </p>
                </div>
           </div> 
      </div>
    )
}
