import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
    const user = useSelector((state) => state);
    console.log(user);
  return (
    <div>Form</div>
  )
}

export default Form