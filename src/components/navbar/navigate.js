import React from 'react'

function navigate() {
  return (
    <div>
      <nav className="nav-wrapper indigo lighten-4 z-depth-2 row">
        <Link to="#" className="sidenav-trigger col s3 m3 l3" data-target="mobile-links"> 
          <div className="btn-small blue lighten-2 indigo-text text-darken-3">Carz</div>
        </Link>
        <Link to="/compare" className="col s3 m3 l3 "> 
          <div className="btn-small indigo darken-3 ">Compare</div>
        </Link>

        <Link to="#" className="sidenav-trigger col s3 m3 l3 right" data-target="mobile-links-two"> 
          <i className="material-icons large  indigo-text text-darken-2 left">reorder</i>
        </Link>

        <img src={orbitsBB} alt="orbits" className="orbitssmall hide-on-small-only col s4 l4 m4 push-3"/>    


        
          { user ? (
            <div className="profile container right col s3 m3 l3">
              { user.name }
              <button className="btn-small red lighten-5" onClick={logout}>Log Out</button>
            </div>
          ):(
            <Link to="/auth" className="container right col s3 m3 l3">
              <div className="btn-small waves-light indigo lighten-3 z-depth-0"> Sign In </div>
            </Link>
          )}
        

        
      </nav>

      <ul className="sidenav blue lighten-4" id="mobile-links">
        <Categories />
      </ul>
      <ul className="sidenav grey lighten-4" id="mobile-links-two">
        <Aside />
      </ul>
    </div>
  )
}

export default navigate
