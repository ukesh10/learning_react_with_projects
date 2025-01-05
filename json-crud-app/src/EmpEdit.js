import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmpEdit = () => {
  const { empid } = useParams();

  useEffect(() => {
    fetch('http://localhost:8000/employee/' + empid).then((res) => {
      return res.json();
    }).then((resp) => {
      idchange(resp.id);
      namechange(resp.name);
      emailchange(resp.email);
      phonechange(resp.phone);
      activechange(resp.isactive);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])

  const navigate = useNavigate();
  const[id,idchange] = useState('')
  const[name,namechange] = useState('')
  const[email,emailchange] = useState('')
  const[phone,phonechange] = useState('')
  const[active,activechange] = useState(true)
  //const [empdata, empdatachange] = useState({});
  const[validation,valchange] = useState(false)

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = {id,name,email,phone,active};

    fetch ('http://localhost:8000/employee/'+empid,{
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(empdata)
    }).then((res) => {
        alert('Saved successfully')
        navigate('/')
    }).catch((err)=>{
        console.log(err.message)
    })
  }
  return (
    <div>
    <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handlesubmit}>

                <div className='card' style={{textAlign:'left'}}>
                    <div className='card-title'>
                        <h2>Employee Create</h2>
                    </div>

                    <div className='card-body'>

                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>ID</label>
                                    <input value={id} disabled='disabled' className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className='form-control'></input>
                                    {name.length===0 && validation && <span className='text-danger'>You must enter the name</span>}
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input value={email} onChange={e=>emailchange(e.target.value)} className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Phone</label>
                                    <input value={phone} onChange={e=>phonechange(e.target.value)} className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-check'>
                                    <input type='checkbox' className='form-check-input'></input>
                                    <label checked={active} onChange={e=>activechange(e.target.checked)} className='form-check-label'>Is Active</label>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <button className='btn btn-success' type='submit'>Save</button>
                                    <Link className='btn btn-danger' to='/'>Back</Link>
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </form>
        </div>
    </div>
</div>
  )
}

export default EmpEdit
