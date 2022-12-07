let standing = document.getElementById("standB");
standing.addEventListener("click", () => {
    console.log('standing'),
        fetch('http://localhost:3080/stand', {
            method: 'Post'
        })
            .then(data => data.json())
            .then(game => {
                console.log(game)
            })
})

let hitting = document.getElementById("hitB");
hitting.addEventListener("click", () => {
    console.log('hitting'),
        fetch('http://localhost:3080/hit', {
            method: 'Post'
        })
            .then(data => data.json())
            .then(game => {
                console.log(game)
        })
})

let reseting = document.getElementById("resetB");
reseting.addEventListener("click", () => {
    console.log('reseting'),
        fetch('http://localhost:3080/reset', {
            method: 'Post'
        })
            .then(data => data.json())
            .then(game => {
                console.log(game)
                let playerHandBox = document.querySelector('div#cardbox')
                while(playerHandBox.firstChild){
                    playerHandBox.removeChild(playerHandBox.firstChild)
                }
                for (x of game.playerHand){
                    document.querySelector('div#cardBox')
                    let L = document.createElement(img)
                    L.setAttribute('src', `PNG-cards-1.3/${rank}_of_${suite}.png`)
                    img.setAttribute('width', '200')
                    img.setAttribute('height', '300')
                    cardBox.appendChild(img)
                    

                }
            })
})

