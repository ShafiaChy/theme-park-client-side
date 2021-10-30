import React,{useState,useEffect} from 'react';
import useAuth from '../Hooks/useAuth';
import ShowMyOrder from './ShowMyOrder';

const MyOrder = () => {
    const [myOrders, setMyOrder] = useState([]);
 
    const {user} = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setMyOrder(data))
    },[])
    const chosenOrders = myOrders.filter(myOrder => myOrder.email == user.email)

    
    return (
        <div>
          
            {
                chosenOrders.map(chosenOrder=> <ShowMyOrder
                key={chosenOrder._id}
                chosenOrder ={chosenOrder}
                ></ShowMyOrder>)
            }
         
        </div>
    );
};

export default MyOrder;