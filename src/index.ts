import './styles.css';

let url: string = "http://swapi.dev/api/people/"


interface Data {
    url: string
}
type GetCharData = (url: string) => Promise<Data[]>

let charArray: any = []
const getCharacterData: GetCharData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    const charData = data.results
    return charArray.push(charData)
}

window.addEventListener('load', () => {
getCharacterData(url).then(() =>{
    console.log(charArray[0][1])
    for(let i: number = 0; i < charArray[0].length; i++){
        const card = document.createElement('div')
        card.className = "card"

        const title = document.createElement('h2') // title
        title.innerText = charArray[0][i].name
        card.appendChild(title)

        const main = document.querySelector('main') // append to main
        main.appendChild(card)

        const infoArea = document.createElement("div") // create infoArea
        infoArea.className = "infoArea"
        infoArea.className = "hidden"
        infoArea.id = "info"
        card.appendChild(infoArea)

        const charHeight = document.createElement('p') // char height
        charHeight.innerText = "Height: " + charArray[0][i].height
        infoArea.appendChild(charHeight)

        

        card.addEventListener("click", function() { // info toggle
            infoArea.classList.toggle('hidden')
            card.classList.toggle("visible")
        })
        console.log(title)
    }
})

})
