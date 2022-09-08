class DataModule {
  person: Person;
  pokemon: Pokemon;
  quote: Quote;
  meatText: MeatText;
  loadedUser: DataModule

  constructor() {
    this.person = {} as Person;
    this.pokemon = {} as Pokemon;
    this.quote = {} as Quote;
    this.meatText = {} as MeatText;
    this.loadedUser = {} as DataModule
  }

  async personGenerator() {
    const response = await $.get("https://randomuser.me/api/?results=7");
    const usersList: PersonInterface[] = response.results;
    const friendsList: string[] = usersList.map((value) => {
      return `${value.name.first} ${value.name.last}`;
    });
    const friendObject: object = {
      friendsList: friendsList.map((value) => {
        return { name: value };
      }),
    };
    let person: Person = new Person(
      usersList[0].name.first,
      usersList[0].name.last,
      usersList[0].picture.thumbnail,
      usersList[0].location.city,
      usersList[0].location.state,
      friendObject
    );
    return person;
  }

  async quoteGenerator() {
    const response = await $.get("https://api.kanye.rest");
    let quote = new Quote(response.quote);
    return quote;
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  properCase(text: string) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  }
  async pokemonGenerator() {
    const num = this.getRandomInt(0, 905);
    const response = await $.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
    const pokemon: Pokemon = new Pokemon(
      this.properCase(response.forms[0].name),
      response.sprites.front_default
    );
    return pokemon;
  }

  async randomMeatText() {
    const response = await $.get("https://baconipsum.com/api/?type=all-meat");
    let text: MeatText = new MeatText(response[0]);
    return text;
  }

  async generatAll() {
    await this.personGenerator().then((value) => {
      this.person = value;
    });

    await this.pokemonGenerator().then((value) => {
      this.pokemon = value;
    });

    await this.quoteGenerator().then((value) => {
      this.quote = value;
    });

    await this.randomMeatText().then((value) => {
      this.meatText = value;
    });
  }

  saveToLocalStorage(dataModule: DataModule) {
    if (localStorage.length === 0) {
      localStorage.setItem("userArry", JSON.stringify([dataModule]));
    } else {
      const userArry = JSON.parse(localStorage.userArry);
      userArry.push(dataModule);
      localStorage.clear();
      localStorage.setItem("userArry", JSON.stringify(userArry));
    }
  }
  loadFromLocalStorage() {
    if (localStorage.length > 0) {
      const localStorageObject = JSON.parse(localStorage.userArry);
      const userLoaded = new DataModule();
      userLoaded.person = localStorageObject[0].person;
      userLoaded.pokemon = localStorageObject[0].pokemon;
      userLoaded.quote = localStorageObject[0].quote;
      userLoaded.meatText = localStorageObject[0].meatText;
      this.loadedUser=userLoaded
    } 
  }
}
