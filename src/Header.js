import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className="movie
    _header" style={{
        backgroundImage: `url('https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png')`,
        backgroundPosition: 'center center',
        height: "70vh"

      }}>
      <div className="header_content">
        <h1>title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam distinctio eaque ad incidunt sint perferendis aliquam, officia numq impedit harum blanditiis or quis earum </p>
        <div className="header_btns">
          <button>
            Play
          </button>
          <button>
            More Info
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
