import React from 'react';
import NaverHome from '../../NaverHome';
import Navigator from '../../Navigator/navigator';

export default function Header() {
    return (
        <div>
            <span className={"header"}>
                <span className={"text"}><span className={"text-Z"}>Z</span><span className={"text-O"}>O</span><span className={"text-A"}>A</span> Foundation</span>
                <span className={"search-wrapper"}>
                <input type={'search'} className={"search"} placeholder={"Search..."} /> <i className={"fa fa-search fa-1x"}></i>
                </span>
            </span>
            <div className={"info-card"} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://media.gettyimages.com/photos/happy-birthday-girl-picture-id653241388?k=6&m=653241388&s=612x612&w=0&h=06bFtTRzp2vqDAlbmpAItfr4EUEJ8iiRsFvgGTPHPQY=')`}}>
                <div className={"head-info"}>
                    <div className={"nav-indicator"}>
                        <p className={"paragraph"}>
                           <NaverHome />
                        </p>
                        <span className={"para-indicator"}>
                            ZOA <i className={'fa fa-caret-right'}></i> Home
                        </span>
                       
                    </div>
                </div>
                <Navigator />
            </div>
        </div>
    )
}
