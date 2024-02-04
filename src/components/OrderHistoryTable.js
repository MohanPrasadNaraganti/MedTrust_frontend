import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


const OrderHistoryTable = () => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch()
 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/orders')
        // console.log(response.data,"orders")
        setOrders(response.data)

      } catch (err) {
        alert(err.response.data.msg)
      }
    }
    fetchProducts();

  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: '2em' ,color:"black"}}>Orders History</h2>

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Order ID</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Order Amount</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px', textAlign: 'left' }}>{order._id}</td>
              <td style={{ padding: '8px', textAlign: 'left' }}>{order.orderId}</td>
              {/* Display other order information */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default OrderHistoryTable;
