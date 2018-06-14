import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            //added key={business.id} because this way each business item rendered will have its unique id
            return <Business business={business} key={business.id} />  
          })
        }
      </div>
    );
  }
};

export default BusinessList;
