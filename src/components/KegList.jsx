import React from 'react';
import Kegs from './Kegs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


// let masterKegList = [  
//   {  
//     name: 'Trumer',
//     brand: 'Trumer Brewing',
//     style: 'Pilsner',
//     alc: '6%',
//     price: '$5'
//   },
//   {  
//     name: 'Trumer',
//     brand: 'Trumer Brewing',
//     style: 'Pilsner',
//     alc: '6%',
//     price: '$5'
//   },
//   {  
//     name: 'Trumer',
//     brand: 'Trumer Brewing',
//     style: 'Pilsner',
//     alc: '6%',
//     price: '$5'
//   }
// ];

function KegList(props){
  // eslint-disable-next-line no-console
  console.log(props.newList);

  return (
    <div>

      <div>
        <Link to="/newKeg"><button>New Keg</button></Link>
        <Link to="/about"><button>About Us</button></Link>

      </div>

      <div>
        {props.newList.map((keg) =>
          <Kegs
            name={keg.name}
            brand={keg.brand}
            style={keg.style}
            alc={keg.alc}
            price={keg.price}
            pintsLeft={keg.pintsLeft}
            key={keg.id}/>
        )}
      </div>

  
    </div>
  );
}

KegList.propTypes = {
  newList: PropTypes.array
};

export default KegList;