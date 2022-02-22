import React from "react";
import './App.css'
import h_logo from "./Image/h_logo.PNG"
import girl1 from "./Image/girl1.png"
import web from "./Image/web.PNG"
import mangirl from "./Image/mangirl.jpg"
import manyd from "./Image/manyd.PNG"
import sec21 from "./Image/image2/sec21.PNG"
import sec22 from "./Image/image2/sec22.PNG"
import sec23 from "./Image/image2/sec23.PNG"
import sec31 from "./Image/image2/sec31.PNG"
import sec4 from "./Image/image2/sec4.PNG"
import sec51 from "./Image/image2/sec51.PNG"
import sec52 from "./Image/image2/sec52.PNG"
import sec53 from "./Image/image2/sec53.PNG"
import sec6 from "./Image/image2/sec6.PNG"
import sec7 from "./Image/image2/sec7.PNG"
import enp from "./Image/enp.PNG"






function App() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="headerwrapper">
            <div><img src={h_logo} className="logo" / ></div>
            <div className="nav">
            <p>Products</p>
            <p>Plaform</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Customers</p>
            <p>Support</p>
            <img src={web} />
            </div>
            

          </div>        
          
        </div>

        <div className="heroholder">
          <div className="herowrapper">
            <div className="left">
              <h1 className="heading" >Delight made <br/> easy</h1>  
              <p className="pmain">we make it  fast and easy for your business to delight <br/>customers and employees</p>
              <div className="but">
                <button className="btn1">Free Trials</button>
                <button className="btn2">Contact Sales</button>
              </div>
            </div>
            <div>
              <img src={girl1} className="baby"/>
            </div>

          </div>
        </div>

        <div className="container2">
          <div className="section1">
            <div>
              <img src={mangirl} className="mang" />
            </div>
            <div>
              <h1 className="writeup">Try the business software used by over<br/> 50,000 companies across the globe to<br/> exceed customer and employee<br/> expectations.</h1> 
              <img src={manyd}/>
              {/* <div className="points">Customer service</div>
              <div className="points">IT Service Management</div>
              {/* <div className="points">HR Management</div>
              <div className="points">Sales Automation</div>
              <div className="points">Marketing Automation</div>
              // <div className="points">All Product $ Trials</div> */}
            </div>
          </div>
        </div>

        <div className="section2"><img src={sec21} className="sec21" />
        <img src={sec22} className="sec22" />
        <img src={sec23} className="sec23" /></div>
        <div><img src={sec31} className="sec331" /></div>
        <div><img src={sec4} className="sec4" /></div>
        <div><img src={sec51} className="sec51" /></div>
        <div><img src={sec52} className="sec52" /></div>
        <div><img src={sec53} className="sec53" /></div>
        <div><img src={sec6} className="sec6" /></div>
        <div><img src={sec7} className="sec7" /></div>

        <div className="footer">
          <div className="footerwrapper">
            <div><p className="pfooter"> Terms of service - Privacy Notice - Takedown Policy - GDPR - Security - CSR - Policy - Tax - FAQs - Unsubscribe</p></div>
            <div><p className="pfooter">Copyright © Freshworks Inc. All Rights Reserved </p></div>
          </div>

        </div>

        <div className="Bdown">
          <div><img src={enp} className="enp" /></div>
          <div>CONTACT SALES</div>
        </div>

















      </div>

    </div>
  )
}

export default App



