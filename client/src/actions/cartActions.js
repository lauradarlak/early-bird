
export const resetCart = () => ({
  type: 'RESET_CART'
});

export const addToCart = (item, slug)  => ({
    type: 'ADD',
    payload: { item },
    pathname: slug
});


// ** Async Actions **

export const updateInventory = (item) => {
  console.log('C')
  fetch(`http://localhost:3001/api/products/${item.id}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PATCH',
    body: JSON.stringify({
      quantity: item.quantity})
  })
  .then(res => console.log("D"))
  
  .catch(console.error)
  console.log('E')
}
