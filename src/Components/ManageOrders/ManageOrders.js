import React ,{useState, useEffect} from 'react';
import ShowAllOrders from '../ShowAllOrders/ShowAllOrders'



const ManageOrders = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() =>{
        fetch('https://haunted-dungeon-90790.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrder(data))

    },[])
    
    return (
        <div>
            <h1 className="text-center mt-3">ALL USERS' ORDERS</h1>
           <div className="py-5 mx-auto row row-cols-1 row-cols-md-3 w-75 g-4">
               
                {
                        orders.map(order => <ShowAllOrders
                        key={order._id}
                        order={order}
                        ></ShowAllOrders>)
                }
              </div>
        </div>
    );
};

export default ManageOrders;