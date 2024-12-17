import { Button } from '@mui/material';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import SearchBox from '../header/searchBox';

const CountryDropDown = () => {
  return (
    <React.Fragment>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">All</span>
        </div>
      </Button>
      <Dialog open={true} className="locationModal">
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <SearchBox />
        <ul className='countryList mt-3'>
          <li>
            <Button>All</Button>
          </li>
        </ul>
      </Dialog>
    </React.Fragment>
  );
};

export default CountryDropDown;
