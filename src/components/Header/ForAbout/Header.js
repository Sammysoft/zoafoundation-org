import React from 'react';
import NaverAbout from '../../NaverAbout';
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
            <div className={"info-card"}>
                <div className={"head-info"}>
                    <div className={"nav-indicator"}>
                        <p className={"paragraph"}>
                           <NaverAbout />
                        </p>
                        <span className={"para-indicator"}>
                            ZOA <i className={'fa fa-caret-right'}></i> About
                        </span>
                       
                    </div>
                </div>
                <Navigator />
            </div>
        </div>
    )
}
