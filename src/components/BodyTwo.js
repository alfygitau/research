import React from 'react'
import arts from '../Assets/arts.jpg'
import bus from '../Assets/bus.jpg'
import econ from '../Assets/econ.jpg'
import bio from '../Assets/bio.jpg'
import socio from '../Assets/socio.jpg'
import medi from '../Assets/medi.jpg'
import math from '../Assets/math.jpg'
import engin from '../Assets/engin.jpg'
import chem from '../Assets/chem.jpg'
import earth from '../Assets/earth.jpg'
const BodyTwo = () => {
    return (
        <>
        <div>
            <center><h1 style={{marginTop:'50px'}}>10 Research Areas</h1></center>
            <center><p style={{marginLeft:"150px",marginRight:"150px",marginTop:"20px",marginBottom:"30px"}}>
                Are you a passionate marine ecologist? An AI enthusiast? On Researcher, 
                you'll find the top academic journals whatever your area of interest. 
                We've got comprehensive coverage across all subjects, ranging from chemistry and 
                materials science to arts and humanities.</p></center>
        </div>
<div style={{marginTop:'50px'}}class="container">
  <div class="row">
    <div class="col">
    <img className="arts" src={arts} alt="alternatetext"/>
    <p>ARTS AND HUMANITIES</p>
    </div>
    <div class="col">
    <img className="arts" src={bus} alt="alternatetext"/>
    <p>BUSINESS AND MANAGEMENT</p>
    </div>
    <div class="col">
    <img className="arts" src={bio} alt="alternatetext"/>
    <p>LIFE SCIENCE AND BIOLOGY</p>
    </div>
    <div  class="col">
    <img className="arts" src={econ} alt="alternatetext"/>
    <p>ECONOMICS AND FINANCE</p>
    </div>
    <div  class="col">
    <img className="arts" src={socio} alt="alternatetext"/>
    <p>SOCIAL SCIENCE AND PSYCHOLOGY</p>
    </div>
  </div>
</div>
<div style={{marginTop:'50px'}}class="container">
  <div class="row">
    <div class="col">
    <img className="arts" src={medi} alt="alternatetext"/>
    <p>MEDICAL AND HEALTH SCIENCES</p>
    </div>
    <div class="col">
    <img className="arts" src={engin} alt="alternatetext"/>
    <p>ENGINEERING AND COMPUTER SCIENCE</p>
    </div>
    <div class="col">
    <img className="arts" src={math} alt="alternatetext"/>
    <p>PHYSICS AND MATHEMATICS</p>
    </div>
    <div  class="col">
    <img className="arts" src={earth} alt="alternatetext"/>
    <p>EARTH SCIENCE AND GEOGRAPHY</p>
    </div>
    <div  class="col">
    <img className="arts" src={chem} alt="alternatetext"/>
    <p>CHEMISTRY AND MATERIAL SCIENCE</p>
    </div>
  </div>
</div>
        </>
    )
}

export default BodyTwo
