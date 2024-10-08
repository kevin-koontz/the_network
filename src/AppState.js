import { reactive } from 'vue'
import { Post } from "./models/Post.js"
import { Ad } from "./models/Ad.js"
import { Account } from "./models/Account.js"


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {Post[]} */
  posts: [],
  /** @type {Ad[]} */
  ads: [],
  /** @type {import('./models/Account.js').Account} */
  activeProfile: null,
  /** @type {Post[]} */
  searchedPosts: [],
  /** @type {Post[]} */
  likedPosts: [],
})

