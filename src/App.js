import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Cert from './components/Cert';
import Portfolio from './components/Portfolio';
// import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  componentDidMount() {
    fetch("https://ru1vep5kyg.execute-api.us-east-1.amazonaws.com/Prod/put" )
      .then(res => res,
        (error) => {
          console.log(error);
        }
      )
  }
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Cert resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        {/* <Testimonials resumeData={resumeData}/> */}
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;