fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20')
    .then(res => res.json())
    .then(data => console.log(data))