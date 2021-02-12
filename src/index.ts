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
    console.log(charArray[0][1].species)
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

        const charMass = document.createElement('p') // char Mass
        charMass.innerText = "Weight: " + charArray[0][i].mass
        infoArea.appendChild(charMass)

        const charHair = document.createElement('p') // char hair color
        charHair.innerText = "Hair Color: " + charArray[0][i].hair_color
        infoArea.appendChild(charHair)
        
        const charBirth = document.createElement('p') // char birth year
        charBirth.innerText = "Birth Year: " + charArray[0][i].birth_year
        infoArea.appendChild(charBirth)

        const charEyes = document.createElement('p') // char eye color
        charEyes.innerText = "Hair Color: " + charArray[0][i].eye_color
        infoArea.appendChild(charEyes)

        const charGender = document.createElement('p') // char gender
        charGender.innerText = "Species: " + charArray[0][i].gender
        infoArea.appendChild(charGender)
        

        card.addEventListener("click", function() { // info toggle
            infoArea.classList.toggle('hidden')
            card.classList.toggle("visible")
        })
        console.log(title)
    }
})

})
