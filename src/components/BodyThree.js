import React from 'react'
import jem from '../Assets/jem.jpg'
import cur from '../Assets/cur.jpg'
import dig from '../Assets/dig.jpg'

const BodyThree = () => {
    return (
        <>
        <div>
            <center><h1 style={{marginTop:'50px'}}>TRENDING PAPERS</h1></center>
<div class="container">
  <div class="row">
    <div class="col-lg-4 d-flex align-items-stretch">
    <div class="card" style={{width: '18rem'}}>
  <img class="card-img-top" src={dig} alt="Cardcap"/>
  <div class="card-body">
    <h5 class="card-title">Digital Creativity</h5>
    <p class="card-text">Compositional strategies with generative scores</p>
  </div>
</div>
</div>
<div class="col-lg-4 d-flex align-items-stretch">
    <div class="card" style={{width: '18rem'}}>
  <img class="card-img-top" src={jem} alt="Cardcap"/>
  <div class="card-body">
    <h5 class="card-title">Journal of Ethnic and Migration Studies</h5>
    <p class="card-text">Ethnicity across regional boundaries: migration and the politics of inequality in Eithiopia.</p>
  </div>
</div>
</div>
<div class="col-lg-4 d-flex align-items-stretch">
    <div class="card" style={{width: '18rem'}}>
  <img style={{height:'200px'}} class="card-img-top" src={cur} alt="Cardcap"/>
  <div class="card-body">
    <h5 class="card-title">Current Psychology</h5>
    <p class="card-text">Leaning forward to increase approach motivation! The role of joy, exercise, and posture in achieving goals.</p>
  </div>
</div>
</div>
  </div>
</div>
</div>
        </>
    )
}

export default BodyThree
