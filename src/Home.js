import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  return ( 
    <>
    <Navbar/>
    <body style={{backgroundColor:'#181f26'}}>
      <div className="container-fluid">
        <div className="row" id="hm">
          <div className="col-sm-1"></div>
          <div className="col-sm-5" id="Intro">
            <h1 id-="intro">
                Crop Yield Prediction
            </h1>
            <p id="text1">
                Mrudha helps you to predict yield automatically.
                By providing basic information of your crop get approximate yield.
                This portal uses machine learning techniques to predict yield with atmost accuracy.
                It also provides data for any reference required.
                We relayed on government portals for data.
                As of now this website is specific to only districts of Teleangana.
                This predictions will some extent eradicates the confustion in decision decision-making,
                however the prediction strongly dependent on climate conditions which may fluctuate constantly.
            </p>
          </div>
          <div className="col-sm-6" id="img1">
            <img src="Pic1.png" atl="Introduction image" width="700px"/>
          </div>

        </div>
      </div>
      <div className="Concept">
        <div className="heading">
            <h1>Why Crop Yield Prediction</h1>
        </div>
        <div className="content">
          <p>
            Crop yield prediction is an essential task for the decision-makers at national and regional levels for rapid decision-making. An accurate crop yield prediction model can help farmers to decide on what to grow and when to grow. 
                To prepare for the coming disaster, developing nations like India with their exponential population increase should concentrate on cutting-edge agricultural technologies. Early-stage crop yield prediction is one of the most important activities since it is one of the most difficult tasks in precision agriculture because it necessitates a thorough comprehension of the growth pattern with the highly nonlinear characteristics. Environmental factors including humidity, temperature, and rainfall, as well as management techniques like irrigation, herbicides, and fertilizers, are quite dynamic and differ from field to field. Data for the proposed work were gathered over a 10 year period from five different fields like Cotton, Maize, Rice, Wheat and Groundnut in 32 districts across Telangana.
          </p>
        </div>
      </div>
      <br /><br />
      <div className="buttun">s
        <Link to="/yield"><button id="btn">Get Yield Prediction</button></Link>
      </div>

      <br /><br /><br /><br /><br /><br /><br />
      <div className="Miscellaneous">
        <h1 id="Mis">
          Miscellaneous
        </h1>
        <div className="boxes">
          <div className="box1">
            <h3 className="heading">Attributes</h3>
            <p id="matter">Crop yield is primarily dependent on attributes like temperature, Rainfall, Irrigation level and ph of soil.Predicted of yield happened based on these parameters.Though there are other factors that influence yield due to lack of information other attributes are not included.</p>
          </div>
          <div className="box2">
            <h3 className="heading">Accuracy</h3>
            <p id="matter">Accuracy of our model is between 80-90%.Machine learning models are utilized for predicting yield.Machine Learning and AI are the techonologies used in many domains.These models helps to predict values based on past data</p>
          </div>
        </div>
        <div className="box3">
          <h3 className="heading">Crops Data</h3>
          <p id="matter3">The dataset primarily consists of all districts within the state of Telangana.Five crops were choosen.Initially, the data was separate and scattered across various websites. However, it was efficiently merged to create comprehensive dataset.</p>
          <h3 id="sause">Sources</h3>
          <ul className="sas">
              <li><a href="https://agricoop.nic.in/sites/default/files/pocketbook_0.pdf" target="_blank" class="src" style={{ fontSize: '20px' }}>https://agricoop.nic.in/sites/default/files/pocketbook_0.pdf
              </a></li>
              <li><a href = "https://data.telangana.gov.in/dataset/telangana.gov.in" target="_blank" class="src" style={{ fontSize: '20px' }}>https://data.telangana.gov.in/dataset/telangana.gov.in
              </a></li>
              <li><a href = "https://data.desagri.gov.in/website/crops-apy-report-web" target="_blank" class="src" style={{ fontSize: '20px' }}>https:// data.desagri.gov.in/website/crops-apy-report-web</a></li>
          </ul>
        </div>

      </div>
      <br /><br />
      
    </body>
    <Footer/>
    </>
   );
}
 
export default Home;

