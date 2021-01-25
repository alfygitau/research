import React from 'react'
import img2 from '../Assets/bac1.jpg'


const BodyOne = () => {
    return (
        <>
        <div className="body1">
         <center><h1>Never Miss Important Research</h1></center>
         <p style={{alignContent:"center",marginLeft:"150px",marginRight:"150px",marginTop:"30px",marginBottom:"30px"}}>Keeping up-to-date with research can feel impossible, with papers being published faster than you'll 
           ever be able to read them. That's where Researcher comes in: we're simplifying discovery. 
           With over 15,000 journals across 10 research areas, just choose which journals you want to follow and 
           we'll create you a personalised feed. It's like social media, but better. Oh, and we should mention - 
           it's free.</p>
            <center><button type="button" class="btn btn-primary"style={{borderRadius:"30px",marginBottom:"20px"}}>Get Started</button></center>  
        </div>
  <div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h1 style={{marginTop:'200px'}}>DISCOVER</h1>
    </div>
    <div class="col-sm-4">
    <img className="img-1" src={img2} alt="alternatetext"style={{marginTop:'20px'}}/>
    </div>
    <div class="col-sm-4">
      <p style={{marginTop:'150px'}}>Researcher is an app designed by academics, for academics. 
        Our features are built to help you stay ahead. You'll find filters, 
        notifications, bookmarks and more - you'll never miss that essential piece of research again</p>
        <a href="/#">Discover Features</a>
    </div>
  </div>
</div>
        </>
    
    )
}

export default BodyOne
