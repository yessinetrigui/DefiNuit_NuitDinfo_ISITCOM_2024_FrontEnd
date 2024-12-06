import React from 'react';

import PropTypes from "prop-types";

const Title = ({title}) => {
    return  <div className='grid justify-center items-center text-center '>
    <h1 className='text-2xl text-[#FF2626] col-start-1 row-start-1'>{title}</h1>
    <h1 className='text-2xl text-[#26FF79] font-bold col-start-1 row-start-1 lg:translate-x-[-0.8rem] translate-x-[-0.2rem]'>{title}</h1>
    <h1 className='text-xl text-[#262aff] col-start-1 row-start-1 lg:translate-x-[0.8rem] translate-x-[-0.2rem]'>{title}</h1>
  </div>
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
  };
export default Title

