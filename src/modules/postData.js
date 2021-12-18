const postData = () => {
    return fetch('https://fakeozon-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body: JSON.stringify({
          title: "Ведьмак 3",
          price: 3000,
          sale: true,
          img: "https://cdn1.ozone.ru/multimedia/c400/1026951535.jpg",
          category: "Игры и софт"
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(responce => responce.json())
} 

export default postData