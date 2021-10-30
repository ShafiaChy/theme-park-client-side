import React,{useState,useEffect} from 'react';

const ShowMyOrder = (props) => {
    const [chosenOffers, setChosenOffer] = useState([]);
    const {order,status, _id} = props.chosenOrder;
    //console.log(order)
   
    useEffect(() => {
        fetch('http://localhost:5000/offers')
        .then(res => res.json())
        .then(data => setChosenOffer(data))
    },[])
    
    const myOffers = chosenOffers.filter(chosenOffer => chosenOffer.key == order)

    const handleDelete = id =>{
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{ 
            //console.log("jo",data)
            if(data.deletedCount){
              
                const result = window.confirm('Are you sure you want to delete?');
                if(result){
                    window.location.reload();
          
                }
                
               
            }

            
              
        })
    }

    //console.log(myOffers)
    return (
        <div>
         <div className="card mb-3 w-75 mx-auto mt-3">
            <div className="row no-gutters ">
                    <div className="col-md-4">
                    <img src={myOffers[0]?.image} className="card-img h-75 w-75 d-flex mx-auto my-5" alt="..."/>
                    </div>
                    <div className="col-md-8 my-5">
                    <div className="card-body">
                        <h5 className="card-title">{myOffers[0]?.name}</h5>
                        <h5 className="card-title">Tk: {myOffers[0]?.price}/-</h5>
                        <h6 className="card-title"><span className="text-danger">Status:</span> {status}</h6>

                        <p className="card-text">{myOffers[0]?.detailedInfo}</p>
                        <button onClick={()=> handleDelete(_id)} className="btn btn-danger">Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ShowMyOrder;