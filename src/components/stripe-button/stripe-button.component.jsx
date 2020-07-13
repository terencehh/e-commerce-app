import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const centsPrice = price * 100;
  const publicKey = 'pk_test_51H4LAMESpNmXG4nqgPwlGd58Zpo2C2DvVUjua4mJNQQH7h3zwLGaPv41CXsgZlTtmbtbUWb9rwpE0443DT4JjaQ600J4RdSV1l'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN Clothing Ltd.'
      amount={centsPrice}
      billingAddress
      shippingAddress
      description={`Your Total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
      strikeKey={publicKey}
    />
  )
}

export default StripeCheckoutButton;