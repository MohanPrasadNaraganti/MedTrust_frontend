import React from 'react';
import img from '../images/thankyou.jpg'

function PaymentSuccessPage() {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <img src={img} alt="Payment Successful" style={{ padding:"20px",maxWidth: '70%', height: '500px' }} />
      <h2 style={{ textAlign: 'center', fontSize: '2em' ,color:"black"}}>Payment Successful!</h2>
      <p style={{ textAlign: 'center', fontSize: '1em' ,color:"black"}}>Thank you for your payment. Your order has been successfully processed.</p>
      {/* You can add more details or actions here, like redirecting to another page */}
    </div>
  );
}

export default PaymentSuccessPage;
