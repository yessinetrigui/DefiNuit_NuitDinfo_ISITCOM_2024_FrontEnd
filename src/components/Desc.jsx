import PropTypes from "prop-types";

const Desc = ({text}) => {
    return  <div className='grid justify-center items-center text-center  '>
    <h3 className='text-xl text-[#e9ff26] col-start-1 row-start-1'>{text}</h3>
    <h3 className='text-xl text-[#fbff26] col-start-1 row-start-1 translate-y-[-0.2rem]'>{text}</h3>
  </div>
}

Desc.propTypes = {
  text: PropTypes.string.isRequired,
  };
export default Desc

