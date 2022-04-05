const cardArray = [
    {
        name: 'item1',
        img: 'images/img_01.png'
    },
    {
        name: 'item2',
        img: 'images/img_02.png'
    },
    {
        name: 'item3',
        img: 'images/img_03.png'
    },
    {
        name: 'item4',
        img: 'images/img_04.jpeg'
    },
    {
        name: 'item5',
        img: 'images/img_05.png'
    },
    {
        name: 'item6',
        img: 'images/img_06.png'
    },
    {
        name: 'item1',
        img: 'images/img_01.png'
    },
    {
        name: 'item2',
        img: 'images/img_02.png'
    },
    {
        name: 'item3',
        img: 'images/img_03.png'
    },
    {
        name: 'item4',
        img: 'images/img_04.jpeg'
    },
    {
        name: 'item5',
        img: 'images/img_05.png'
    },
    {
        name: 'item6',
        img: 'images/img_06.png'
    }
]

//trick to randomize array
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resDisplay = document.querySelector("#result")
let cardsChosen = [] //names of cards you flip
let cardsChosenIds = [] //ids of cards you flip
const cardsWon = [] //names of cards you matched already

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.setAttribute('width', 125)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
        //gridDisplay.appendChild(card)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    //if you picked the same card
    if (cardsChosenIds[0] == cardsChosenIds[1]) {
        alert('You clicked the same card :(')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.jpg')
        cards[cardsChosenIds[0]].setAttribute('width', 125)
        cards[cardsChosenIds[1]].setAttribute('width', 125)
    }

    //if the first card you flipped is the same as the second
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert('Match!')
        //if there's a match, we make it white
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        //we'll also remove the event listeners
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        //keep track of matched cards using cardsWon array
        cardsWon.push(cardsChosen)
    }
    //if not the same card or a match, reset to the back of the card
    else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.jpg')
    }
    resDisplay.textContent = cardsWon.length
    //even if it's not a match, still reset because we chose 2 cards
    //since we are re-assigning, we can't use const
    cardsChosen = []
    cardsChosenIds = []

    //if this is the last match
    if (cardsWon.length == (cardArray.length / 2)) {
        resDisplay.textContent = "You won! Game over"
    }
}

//flip card when we click it
function flipCard() {
    //get information for the card flipped
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
    console.log(cardId)
}

createBoard()