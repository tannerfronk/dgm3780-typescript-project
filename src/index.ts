import './styles.css';

let url: string = "https://swapi.dev/api/people/"
let url2: string = "https://swapi.dev/api/planets/"

let planetArray: Array<string> = []

interface Data {
    url: string
}
type GetCharData = (url: string) => Promise<Data[]>

let charArray: any = []
const getCharacterData: GetCharData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    const charData: JSON = data.results
    return charArray.push(charData)
}

let planArray: any = []
const getPlanetData: GetCharData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    const planData: JSON = data
    return planArray.push(planData)
}

window.addEventListener('load', () => {
getCharacterData(url).then(() =>{ // start of character cards
    for(let i: number = 0; i < charArray[0].length; i++){
        const card = document.createElement('div')
        card.className = "card"

        const title: Element = document.createElement('h2') // title
        title.textContent = charArray[0][i].name
        card.appendChild(title)

        const main: Element = document.querySelector('main') // append to main
        main.appendChild(card)

        const infoArea: Element = document.createElement("div") // create infoArea
        infoArea.className = "infoArea"
        infoArea.className = "hidden"
        infoArea.id = "info"
        card.appendChild(infoArea)

        const charHeight: Element = document.createElement('p') // char height
        charHeight.textContent = "Height: " + charArray[0][i].height
        infoArea.appendChild(charHeight)

        const charMass: Element = document.createElement('p') // char Mass
        charMass.textContent = "Weight: " + charArray[0][i].mass
        infoArea.appendChild(charMass)

        const charHair: Element = document.createElement('p') // char hair color
        charHair.textContent = "Hair Color: " + charArray[0][i].hair_color
        infoArea.appendChild(charHair)
        
        const charBirth: Element = document.createElement('p') // char birth year
        charBirth.textContent = "Birth Year: " + charArray[0][i].birth_year
        infoArea.appendChild(charBirth)

        const charEyes: Element = document.createElement('p') // char eye color
        charEyes.textContent = "Hair Color: " + charArray[0][i].eye_color
        infoArea.appendChild(charEyes)

        const charGender: Element = document.createElement('p') // char gender
        charGender.textContent = "Species: " + charArray[0][i].gender
        infoArea.appendChild(charGender)
        

        card.addEventListener("click", function() { // info toggle
            infoArea.classList.toggle('hidden')
            card.classList.toggle("visible")
        })
    }
})

})

getPlanetData(url2).then(() =>{
    for(let i: number = 0; i < planArray[0].results.length; i++){
        planetArray.push(planArray[0].results[i].name)
    }
    const planetArea: Element = document.querySelector('#planets') // append to main
    const planets: Element = document.createElement('p')
    planets.textContent = planetArray.join(", ").toString()
    planetArea.appendChild(planets)
    return planetArray
})

document.getElementById('sort').addEventListener("click", function() { // sort button
    let newString: Element = document.querySelector('#planets')
    newString.textContent = planetArray.sort().join(", ")
})

document.getElementById('pop').addEventListener("click", function() { // delete planet button
    let newString: Element = document.querySelector('#planets')
    planetArray.pop()
    newString.textContent = planetArray.join(", ")
})

document.getElementById('reverse').addEventListener("click", function() { // add planets button
    let newString: Element = document.querySelector('#planets')
    newString.textContent = planetArray.reverse().join(", ")
})