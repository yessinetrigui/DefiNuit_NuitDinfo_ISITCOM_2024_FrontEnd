import { useState } from 'react';


const Form = () => {
  const [text, setText] = useState('send');
  const [clickCount, setClickCount] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);
  const ImagePath = "./assets/s.png"
  const ChangeText = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      let newText = 'send';
      if (newCount <= 4) {
        newText = newText
          .split('')
          .map((char, index) => (index < newCount ? char.toUpperCase() : char))
          .join('');
      } else if (newCount === 5) {
        newText = 'SEND SUREEE???!';
         setImageSrc(ImagePath);
      } else {
        return prevCount; 
      }

      setText(newText);
      return newCount;
    });
  };

    return  <div className='grid justify-center items-center text-center bg-cus3 relative my-96' id='contactus'>
        <h1 className="text-black text-7xl absolute top-8 left-8">USERNAME:</h1>
        <input type="text" className=" border-[#3D3D3D] border-[24px] py-14 w-[500px] absolute top-28 left-8" />

        <h1 className="text-black text-7xl absolute top-80 left-80">eMail:</h1>
        <input type="text" className="border-[#3D3D3D] border-[24px] h-[100px] w-[500px] absolute top-80 left-[820px] bg-[#273343]" />

        <h1 className="text-black text-7xl absolute top-[500px] left-[350px]">MESsage:</h1>
        <input type="text" className="border-[#3D3D3D] border-[24px] w-[80vw] h-[260px] absolute top-[600px] left-[120px] bg-[#1e67c7] text-[#63f877]" />

        <div className='grid   absolute top-[1000px] left-[120px]  active:scale-90' onClick={ChangeText}>
          <img src="./../assets/btnbg.png" alt=""  className='w-full h-auto -mt-8 cursor-pointer  col-start-1 row-start-1'/>
          <h1 className="text-black text-9xl absolute top-8 left-8  select-none cursor-pointer  col-start-1 row-start-1" id="txt1">{text}</h1>
          <h1 className="text-white text-8xl absolute top-7 left-7 select-none cursor-pointer col-start-1 row-start-1" id="txt2">{text}</h1>

        </div>
        {imageSrc && (
        <div className="absolute top-[1200px] left-[120px]">
          <img src={imageSrc} alt="" className="w-80 h-96" />
        </div>
      )}
  </div>
}


export default Form

