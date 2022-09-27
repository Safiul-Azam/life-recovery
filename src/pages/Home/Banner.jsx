import React from 'react';
import banner from '../../images/banner1.png'
import Navbar from '../Shared/Navbar'
import DayManage from './DayManage';
const Banner = () => {
    return (
        <div className='pt-6 min-h-screen' style={
            {
              background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${banner})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }
          }>
            <Navbar/>
            <DayManage/>

    </div>
    );
};

export default Banner;