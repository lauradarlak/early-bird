

// ** Async Actions **

export const updateInventory = (item) => {
  fetch(`http://localhost:3001/api/products/${item.id}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PATCH',
    body: JSON.stringify({
      quantity: item.quantity,
    })
  })
  .then(res => console.log(res))
  .then(window.location.pathname = '/order')
  .catch(console.error)
}
