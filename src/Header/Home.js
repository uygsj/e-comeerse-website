import React from 'react';

//import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    
    <div className="container mt-5">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Venue</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>July 9</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="btn btn-primary">BUY TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>July 11</td>
            <td>TORONTO, ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <button className="btn btn-primary">BUY TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>July 13</td>
            <td>BRISTOW, VA</td>
            <td>JIFFY LUBE LIVE</td>
            <td>
              <button className="btn btn-primary">BUY TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>July 21</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <button className="btn btn-primary">BUY TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>July 27</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <button className="btn btn-primary">BUY TICKETS</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Home;
