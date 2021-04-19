import React from 'react'

function profile() {
  return (
    <div>
      <h4>AENG TECH</h4>
            <div className="profdets col grey darken-4 row">
              <div className="col l4 m4">
                <img src={profile} alt="" className="profile"/>
              </div>
              <div className="col l7 m7">
                <ul> 
                  <li> <h6>Name: Pouke Angus</h6></li>
                    <li> <h6>Email: anguspoukeone@gmail.com</h6> </li>
                    <li><h6> School: Mechanical Engr.</h6> </li>
                </ul>
              <div className="m12 l12">
                <ul className="specialties">
                  <li><img src={css} alt="css" className="profprops"/></li>
                  <li><img src={html} alt="css" className="profprops"/><sup>++</sup></li>
                  <li><img src={jvs} alt="css" className="profprops"/></li>
                  <li><img src={node} alt="css" className="profprops"/></li>
                  <li><img src={react} alt="css" className="profprops"/></li>
                </ul>
              </div>
              </div>
              
            </div>
    </div>
  )
}

export default profile
