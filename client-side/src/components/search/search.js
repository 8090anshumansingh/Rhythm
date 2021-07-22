import React, { useState, useEffect } from "react";
import axios from "../../axios.js";
import "../../styles/search.css";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "../Navbars/Navbar.js";

function Search() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="search">
        <div className="section1">
          <div className="search__box">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for artists, songs or podcasts"
            />

            <button>Search</button>
          </div>
        </div>

        <div className="section2">
          <div className="left">
            <div className="filter-section">
              <h5>Genres</h5>
              <div className="genreBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Pop
                </label>
              </div>
              <div className="genreBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Rock
                </label>
              </div>
              <div className="genreBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  BollyWood
                </label>
              </div>
              <div className="genreBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  k-Pop
                </label>
              </div>
            </div>
            <div className="filter-section">
              <h5>Artists</h5>
              <div className="artistBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Ed sheeran
                </label>
              </div>
              <div className="artistBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  U2
                </label>
              </div>
              <div className="artistBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Linkin Park
                </label>
              </div>
              <div className="artistBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Green Day
                </label>
              </div>
            </div>
          </div>

          <div className="right">youu</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;
