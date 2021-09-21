fetch('https://api.giphy.com/v1/gifs/random?api_key=RlwJ3OH65uXJERrXizegU38c7EH31JF1&tag=&rating=g')
    .then(res => res.json())
    .then(data => {

        console.log(data)

        let a = document.getElementById("icon")
        a.href = data.data.user.profile_url

        if(data.data.user.display_name) {
            document.getElementById("author").textContent = `Via ${data.data.user.display_name} on GIPHY`
        }

        

        document.getElementById("gif-container").innerHTML = `
        <img src="${data.data.images.downsized.url}" />
        `
    })
