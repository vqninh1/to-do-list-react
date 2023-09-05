export const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products', {
      method: 'GET',
    })
    if (res.ok) {
        const data = await res.json()
        return data.products
    }
    else {
        throw new Error("call fail")
    }
  }