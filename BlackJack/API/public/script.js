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
                let playerHandBox = document.querySelector('div#cardBox')
                let dealerHandBox = document.querySelector('div#dealerCardBox')
                console.log(game)
                playerHandBox.replaceChildren()
                for (x of game.playerHand){
                    document.querySelector('div#cardBox')
                    let L = document.createElement('img')
                    L.setAttribute('src', `PNG-cards-1.3/${x.rank}_of_${x.suite}.png`)
                    L.setAttribute('width', '180') 
                    L.setAttribute('height', '280')
                    cardBox.appendChild(L) 
                }
                for (y of game.dealerHand){
                    document.querySelector('div#dealerCardBox')
                    let B = document.createElement('img')
                    B.setAttribute('src', `PNG-cards-1.3/${y.rank}_of_${y.suite}.png`)
                    B.setAttribute('width', '180') 
                    B.setAttribute('height', '280')
                    dealerHandBox.appendChild(B) 
                    break;
                }
            })
})

/* let playerHandBox = document.querySelector('div#cardbox')
                /*while(playerHandBox.firstChild){
                    playerHandBox.removeChild(playerHandBox.firstChild)
                }*/ 