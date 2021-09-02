fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("asset-image").innerHTML = `
        <img class="asset-img" src="${data.assets[0].image_url}" />
        `
        document.getElementById("asset-title").textContent = data.assets[0].name

    })
