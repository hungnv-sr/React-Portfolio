import React, { Component } from 'react';
export default  class Cert extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="cert">
        <div className="row">
          <div className="three columns header-col">
            <h1><span>Certificates</span></h1>
          </div>
          <div className="nine columns">
            {
              resumeData.certs && resumeData.certs.map((item) => {
                return(
                  <div key={item.name} className="four columns">
                    <a target="_blank" rel="noopener noreferrer" href={item.certurl}>
                      <img className="credly"  src={item.imgurl} alt="" />
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}