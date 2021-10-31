import React,{useState,useEffect} from 'react';
import useAuth from '../Hooks/useAuth';
import ShowMyOrder from './ShowMyOrder';

const MyOrder = () => {
    const [myOrders, setMyOrder] = useState([]);
 
    const {user} = useAuth();

    //LOADING ORDER DATA TO MATCH THE EMAIL IN ORDER WITH THE EMAIL AFTER LOGINING
    useEffect(() => {
        fetch('https://haunted-dungeon-90790.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setMyOrder(data))
    },[])
    const chosenOrders = myOrders.filter(myOrder => myOrder.email == user.email)

    //MAPPING THE DATA FOUND WHEN MATCHED EMAILS FOUND
    
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