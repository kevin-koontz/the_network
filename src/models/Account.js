export class Account {

  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.picture = data.picture
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}

const data = {
  "_id": "66ec95d69c5afe6e880880b6",
  "subs": [
    "auth0|66ec95d5e87e4f944e087a5b"
  ],
  "email": "bloggerson@bloggy.blog",
  "name": "bloggerson",
  "picture": "https://s.gravatar.com/avatar/c9c0abb63371c104b4c38b0d7b5f4444?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbl.png",
  "bio": "",
  "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
  "github": "",
  "linkedin": "",
  "resume": "",
  "class": "",
  "graduated": false,
  "createdAt": "2024-09-19T21:21:32.587Z",
  "updatedAt": "2024-09-19T21:21:32.587Z",
  "__v": 0,
  "id": "66ec95d69c5afe6e880880b6"
}
