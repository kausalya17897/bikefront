import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
export default function Payments() {
  function handleToken(token,addresses){
    console.log(token,addresses)
  }
  return (
  <div>
      <h3>Payments</h3>
      <StripeCheckout stripeKey='pk_test_51KOgCPSIwSeqTYQBlJlYk0JjpJTzus6E3ASrD7c3N851Er5bf76NYBmzBYi2TJPeSfd1u8lzC2VJ2u0v3MPuTWKt00xrBLbE8A'
      token={handleToken}/>
  </div>
  )
}
