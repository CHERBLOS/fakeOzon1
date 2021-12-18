const getData = () => {
    return fetch('https://fakeozon-default-rtdb.firebaseio.com/goods.json')
    .then((responce) => {
        return responce.json()
    })

}

export default getData