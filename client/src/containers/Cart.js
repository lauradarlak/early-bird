import React from 'react'

 const Cart = ({ cart, products }) => {
   function compare(a, b) {
      let comparison = 0;
      if (a.id > b.id) {
        comparison = 1;
      } else if (a.id < b.id) {
        comparison = -1;
      }
      return comparison;
    }

  const handleOnSubmit = event => {

    const orderArray = cart;
    orderArray.map(item => {
      fetch(`http://localhost:3001/api/products/${item.id}`, {
        method: 'PATCH',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if(res.ok) {
          redirect: window.location.replace("http://localhost:3000/order")
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .catch(console.error)
    })
  }

  const hasProducts = cart.length > 0;
  const orderedCart = cart.sort(compare);
  const arr = cart;
  arr.reduce(function (acc, obj) { return acc + obj.x; }, 0);
  const nodes = hasProducts ? (

    orderedCart.map(item =>
        <p>{item.name} x {item.orderedQuantity} = ${ item.total }</p>

    )

  ) : (
    <strong>Cart is Empty</strong>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      Total: ${cart.reduce((a, b) => {
          return a + b.total}, 0)}
      <button onClick={() => handleOnSubmit()} type="submit">Send Order</button>

    </div>
  )
}

export default Cart
