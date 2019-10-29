import React from 'react';
import Carousel from '@p/carousel';
import Info from '@p/info';

export default class extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <Carousel />
        </div>
        <div className="col-md-6">
          <Info />
        </div>
      </div>
    );
  }
}
