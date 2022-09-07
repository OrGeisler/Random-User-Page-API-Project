interface PersonInterface {
    gender: string,
    name: {first: string, last: string},
    location: {
      city: string,
      state: string
    }
    picture: {
      thumbnail: string
    }
  }

class Person{

        firstName:string
        lastName:string
        picture:string
        city:string
        state:string
        friends:object

        constructor(firstName:string,lastName:string,picture:string,city:string,state:string,friends:object){
            this.firstName = firstName
            this.lastName = lastName
            this.picture = picture
            this.city = city
            this.state = state
            this.friends = friends
        }
  }
