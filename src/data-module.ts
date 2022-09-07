class DataModule {

    person :Person
    pokemon : Pokemon
    quote: Quote
    meatText: MeatText

    constructor(){
        this.person = {} as Person
        this.pokemon = {} as Pokemon
        this.quote = {} as Quote
        this.meatText = {} as MeatText
    }

    async  personGenerator() {
        const response = await $.get('https://randomuser.me/api/?results=7')
        const usersList:PersonInterface[] = response.results
        let person :Person = new Person(
                        usersList[0].name.first,
                        usersList[0].name.last,
                        usersList[0].picture.thumbnail,
                        usersList[0].location.city,
                        usersList[0].location.state,
                        usersList.map(value =>{
                        return `${value.name.first} ${value.name.last}`
                        }
            ))
        return person
    }

  
    async quoteGenerator() {
        const response = await $.get('https://api.kanye.rest')
        let quote = new Quote(response.quote)
        return quote
    }

    getRandomInt(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    async  pokemonGenerator() {
        const num = this.getRandomInt(0,949)
        const response = await $.get(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        const pokemon : Pokemon = new Pokemon(
            response.forms[0].name,
            response.sprites.front_default
            )
        return pokemon
    }

    async  randomMeatText() {
        const response = await $.get('https://baconipsum.com/api/?type=all-meat')
        let text : MeatText = new MeatText(response[0])
        return text
    }

    async generatAll(){
        await this.personGenerator().then(value =>{
            this.person = value
        }) 
    }

}



dataModule.personGenerator().then(value => {
    dataModule.person = value
    renderer.userRender(dataModule.person)
    console.log(dataModule.person)
});

dataModule.pokemonGenerator().then(value => {
  dataModule.pokemon = value
  console.log(dataModule.pokemon)
})

dataModule.quoteGenerator().then(value => {
  dataModule.quote = value
  console.log(dataModule.quote)
})

dataModule.randomMeatText().then(value => {
  dataModule.meatText = value
  console.log(dataModule.meatText)
})
