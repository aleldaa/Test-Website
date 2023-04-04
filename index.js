const APIKey = '2CEgt9X0hjZ1RksJoyUp'
let bearer = 'Bearer + 2CEgt9X0hjZ1RksJoyUp'
fetch('https://the-one-api.dev/v2/book', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${APIKey}`
    }
})
.then(res=>res.json())
.then(data => console.log(data))

const movieList = document.querySelector('#book-list')


