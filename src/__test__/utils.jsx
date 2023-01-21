import React from 'react'; 
//////////// test for Counteries
const Counteries = ({name,population,flag,}) => { 

  const detailsHandeler = (name) => {
    
  };
  return ( 
            <div key={1} className="card">
              <div className="card-info">
                <div className="image"><img src={flag} alt="flag" /></div>
                <div className="content">
                  <p>{name}</p>
                  <p>{population}</p>
                </div>

              </div>
              <div className="buttton">
                <button type="button" onClick={() => detailsHandeler(name)}> 
                  Detials 
                </button>
              </div>
            </div> 
  );
};

//////////// test for Navbar 

const Navbar = ({length,searchBarValue}) => { 

  const searchFilterFun = (event) => {
     
    };
     
  const searchRes = (event) => {
     
  };

  const handleContinentChange = (continent) => {
     
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <img src='' alt="logo" />
          <div>
            <h1>World Weather App</h1>
            <p>
              Countries
              
              {length}
            </p>
          </div>
        </div>
        <div className="formSearch">
          <form>
            <input
              type="text"
              className="search"
              placeholder="search"
              value={searchBarValue}
              onChange={searchFilterFun}
              
            />
            <button type="submit" aria-label="search" className="searchIcon" onClick={searchRes}></button>
          </form>

          <div className="categoryButton">

            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('All')}>All</button>
            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Africa')}>Africa</button>
            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Asia')}>Asia</button>
            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Europe')}>Europe</button>
            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Oceania')}>Ocenia</button>

            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Americas')}>Americas</button>
          </div>
        </div>
      </div>
    </>
  );
}; 
 
 //////////// test for Details

const Details = ({flag,timezones,region,description,name,population,capital,subregion}) => {
  

  const background = () => {
    // const desc = main;
    // if (desc === 'Clear') {
    //   return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${clearImg})` };
    // }
    // if (desc === 'Thunder') {
    //   return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${thunderImg})` };
    // }
    // if (desc === 'Snow') {
    //   return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${snowImg})` };
    // }
    // if (desc === 'Rain') {
    //   return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${rainImg})` };
    // }
    // if (desc === 'Drizzle') {
    //   return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${drizzleImg})` };
    // }

    // return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cloudsImg})` };
  };

  return ( 
          <div key={1} className="details-container" style={background()}>
            <div className="top">

              
                <button type="button" className="icon">
                  
                </button>
              

              <div className="corner">
                <div className="image"><img src={flag} alt="flag" /></div>
                <div className="corner-content">
                  <p className="title"> 
                    time Zone:
                    {timezones}
                  </p>
                  <p className="title"> 
                    country Region:
                    {region}
                  </p>
                </div>

              </div>
            </div>

            <div className="details-info">
              <p className="title">Weather</p>
              <p className="content">{ description}</p>
              <p className="title">country Name</p>
              <p className="content">{name}</p>
              <p className="title"> country Population</p>
              <p className="content">{population}</p>
              <p className="title"> country Capital</p>
              <p className="content">{capital}</p>

              <p className="title"> country Subregion</p>
              <p className="content">{subregion}</p>

            </div>

          </div>
 

  );
};

export {Counteries,Navbar,Details};

 



