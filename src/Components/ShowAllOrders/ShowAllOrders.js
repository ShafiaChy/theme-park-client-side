import React ,{useState, useEffect} from 'react';

const ShowAllOrders = (props) => {
    
    const {order,status, name, email, _id} = props.order;
    const [userOrders, setUserOrder] = useState([])
    

    useEffect(() =>{
        fetch('http://localhost:5000/offers')
        .then(res => res.json())
        .then(data => setUserOrder(data))
    },[])

    
    const singleOrder = userOrders.filter(userOrder => userOrder.key == order)

    const handleApproved = id =>{
       
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(status)
        })
       
    } 

    const handleDelete = id =>{
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{ 
            //console.log(data)
            if(data.deletedCount){
                const result = window.confirm('Do you want to delete?')
                if(result){
                    window.location.reload();
          
                }    
            }
        })
    }
  
  
    return (
        <div>
            <div className="col">
                        <div className="card h-100">
                        <img src={singleOrder[0]?.image} className="card-img-top offer-image-size" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title"><span className="text-danger ">Username:</span> {name}</h6>
                            <h6 className="card-title"><span className="text-danger ">Email:</span> {email}</h6>
                            <h6 className="card-title"><span className="text-danger ">Offer ID:</span> {order}</h6>
                            <h6 className="card-title"><span className="text-danger">Offer Name:</span> {singleOrder[0]?.name}</h6>
                            <h6 className="card-text"><span className="text-danger">Price:</span> Tk {singleOrder[0]?.price}/-</h6>
                            <h6 className="card-text"><span className="text-danger">Status:</span> {status}</h6>
                            <div className="d-flex">
                            <button onClick={()=> handleApproved(_id)} className="btn btn-success me-3">Approved</button>
                            <button onClick={()=> handleDelete(_id)} className="btn btn-danger">Delete</button>
                            </div>
                         
                        </div>
                      
                    </div>
                    
                </div> 
        </div>
    );
};

export default ShowAllOrders;