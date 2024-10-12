import React, { useState } from 'react';
import { Slider, Typography } from '@mui/material'; 
import { styled } from '@mui/system';
import { Pie } from 'react-chartjs-2';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'; 
import {
  Chart as ChartJS,
  ArcElement, 
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const Prettoslider = styled(Slider)(({ theme }) => ({
  color: 'MediumVioletRed',
  height: 10,
  '& .MuiSlider-thumb': {
    height: 25,
    width: 25,
    backgroundColor: 'white',
    border: '3px solid black',
    marginTop: -9,
    marginLeft: -9,
  },
  '& .MuiSlider-track': {
    height: 10,
    borderRadius: 4,
  },
  '& .MuiSlider-rail': {
    height: 10,
    borderRadius: 4,
  },
}));

const Modal = () => {
  const [invites, setInvites] = useState(1);
  const [eventDuration, setEventDuration] = useState(1);

  const basePricePerInvite = 50; 
  const basePricePerHour = 100;

  const totalPrice = (invites * basePricePerInvite) + (eventDuration * basePricePerHour);
  const navigate = useNavigate();  


  const handleInvite = () => {
    navigate('/');  
  };
  const pieData = {
    labels: ['Invites Cost', 'Event Duration Cost'],
    datasets: [{
      data: [invites * basePricePerInvite, eventDuration * basePricePerHour],
      backgroundColor: ['rgba(75,192,192,1)', 'rgba(255,99,132,1)'],
    }],
  };

  return (
    <div className=' '>
         <Navbar/>
        <div className=' m-auto'>

      <div variant="" className='m-auto text-center h-1 text-3xl max-sm:text-2xl'>Event Price Calculator</div>
      <div className='flex items-center justify-evenly mt-14 '>
      <div>
        <Typography gutterBottom>No. of Invites</Typography>
        <input
        type='number'
          value={invites}
          onChange={(e) => setInvites(Number(e.target.value))} 
          min={1}
          max={100}
          className="border p-1 rounded-lg w-24 mb-5 "
        />
        <Typography className='p-2 border-[1px] border-black w-24 rounded-lg '>{invites}</Typography>
      </div>
      <div>
        <Typography gutterBottom>Duration of Event (Hours)</Typography>
        <input
        type='number'
          value={eventDuration}
          onChange={(e) => setEventDuration(Number(e.target.value))}
          min={1}
          max={12}
          className="border p-1 rounded-lg w-24 mb-5"
        />
        <Typography className='p-2 border-[1px] border-black w-24 rounded-lg '>{eventDuration} hours</Typography>
      </div>
      </div>
      <Typography variant="h6" className='text-center pt-6'>Total Price: ₹{totalPrice}</Typography>
      <div className='w-2/5 mt-10 m-auto max-sm:w-3/4'>
      <Pie data={pieData} />
      </div>
    </div>
    <div className='m-auto w-10 absolute top-[90%] right-[20%] max-sm:top-[120%]'>
    <a onClick={handleInvite} className='p-3 px-5 rounded-2xl bg-green-300 m-auto cursor-pointer hover:bg-green-400 max-sm:px-2 max-sm:text-base' >Close</a>
    </div>
    </div>
  );
};

export default Modal;
