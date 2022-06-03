import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import Headshot from '../assets/images/mp-headshot.png'


const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    // const toggleDarkMode = (e) =>  {
    //     document.documentElement.classList.toggle('dark-mode')
    //     document.getElementById('not-dark').classList.toggle('inverse-dark')
    //     document.getElementById('not-dark2').classList.toggle('inverse-dark')
    //     var x = document.getElementsByClassName('img-pro')
    //     for(let i = 0; i < x.length; i += 1) {
    //         x.item(i).classList.toggle("inverse-dark");
    //     }
        
    //     if (document.documentElement.classList.contains('dark-mode'))
    //       localStorage.setItem('mode', 'Dark')
    //     else
    //       localStorage.setItem('mode', 'Light')
    //     }

    return (
        <div>
            <div className="Header">
            {/* <img className="img-fluid headshot" src={Headshot} alt="Magdalena Perry" /> */}
                <h1 className='name'>magdalena perry</h1>
            <p className=" col-12 line-1 anim-typewriter">...software developer</p>
            {/* <label className="switch">
                <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox"/>
                <span className="slider round"></span>
            </label> */}
            <HeaderButton/>
            </div>

            <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp rounded-circle" src={Headshot}></img>
        </div>
    )
    
}

export default Header;