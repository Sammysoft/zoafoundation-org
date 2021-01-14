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
            <div className={"info-card"} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://media.gettyimages.com/photos/multiethnic-family-children-in-home-kitchen-at-christmas-party-picture-id870161682?k=6&m=870161682&s=612x612&w=0&h=74oTLhIbpoKBQKdy3UXo6KqgCqUhX7jl4H2CTxDmT-0=')` }}>
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
