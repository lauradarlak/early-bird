

// ** Async Actions **

export const updateInventory = (item) => {
  fetch(`http://localhost:3001/api/products/${item.id}`, {
    method: 'PATCH',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(res.ok) {
      redirect: window.location.replace("http://localhost:3000/order")
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
    return res.json()
  })
  .catch(console.error)
}
