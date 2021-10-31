import React from 'react';
import { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';




const PlaceOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { id } =useParams();
    const [details,setDetails] = useState([]);
   

    //data load
    useEffect(() => {
    fetch('https://haunted-dungeon-90790.herokuapp.com/offers')
    .then(res => res.json())
    .then(data => setDetails(data))
  
    },[])

      
     const singleOffer = details.filter(detail => detail.key == id)
        
    //console.log(singleOffer)
      
    const onSubmit = data =>{ 
        console.log(data)
        data.order=id;
        data.status='Pending'
        fetch('https://haunted-dungeon-90790.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Order processed Successfully');
                 
                    reset();
                }
            })
    }
    
    return (
        <div className="my-5">
           <div className="card-deck d-lg-flex ">
                <div className="card w-50 ms-5 mb-3">
                    <img className="card-img-top" src={singleOffer[0]?.image} alt="Card cap"/>
                    <div className="card-body">
                    <h5 className="card-title">{singleOffer[0]?.name}</h5>
                    <h5 className="card-title">Tk:{singleOffer[0]?.price}/-</h5>
                    <p className="card-text">{singleOffer[0]?.detailedInfo}</p>
                    </div>
                </div>
                <div className="card w-75 h-75  ms-5 me-lg-3">
                    <h1 className="text-center my-3 mx-2">Fill up the form</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="ms-4">
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input className="w-75 rounded border-1 py-2" defaultValue={user.displayName} {...register("name")} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPrice" className="col-sm-2 col-form-label input-height">Email</label>
                        <div className="col-sm-10">
                        <input className="w-75 rounded border-1 py-2" defaultValue={user.email} {...register("email", { required: true })} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                        <input className="w-75 rounded border-1 py-2" placeholder="Address" defaultValue="" {...register("address")} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputImage" className="col-sm-2 col-form-label">City</label>
                        <div className="col-sm-10">
                        <input className="w-75 rounded border-1 py-2" placeholder="City" defaultValue="" {...register("city")} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputImage" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                        <input className="w-75 rounded border-1 py-2" placeholder="phone number" defaultValue="" {...register("phone")} />
                        </div>
                    </div>
                    
            
            
                        <input type="submit" className="btn button-bg text-white mb-3"/>
            
                    
                    
                    </form>
                    
                </div>
      
        </div>
    </div>
    );
};

export default PlaceOrder;