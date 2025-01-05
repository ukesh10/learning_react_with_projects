import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const EmpDetail = () => {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/employee/' + empid).then((res) => {
      return res.json();
    }).then((resp) => {
      empdatachange(resp)
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])
  return (
    <>
      <div className='card' style={{ textAlign: 'left' }}>
        <div className='card-title'>
          <h2>Employee Details :</h2>
        </div>
        <div className='card-body'>
          {empdata &&
            <div>
              <h4>ID : {empdata.id}</h4>
              <h4>Name : {empdata.name}</h4>
              <h4>Email : {empdata.email}</h4>
              <h4>Phone : {empdata.phone}</h4>
              <Link className='btn btn-danger' to='/'>Back to Listing</Link>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default EmpDetail
