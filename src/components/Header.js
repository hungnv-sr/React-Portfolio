import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            {/* <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">{resumeData.name}.</h1>
                <h2 style={{color:'#fff', fontFamily:'sans-serif '}} className="cd-headline letters type">
                  {/* <div>Hello from a {resumeData.role}</div> */}
                  <span>Hello from a </span> 
                  <span className="cd-words-wrapper waiting">
                  {
                    resumeData.role && resumeData.role.map((item, index) =>{
                      return(
                        <b key={index} className={(index===0 ? 'is-visible' : '')}>{item}</b>
                      )
                    })
                  }
                  </span>
                </h2>
                <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.personalDescription}</h3>
                <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.interests}</h3>
                <hr/>
                <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}