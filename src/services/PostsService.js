import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Post } from "@/models/Post.js"
import App from "@/App.vue"


class PostsService {
  deletePost(id) {
    throw new Error("Method not implemented.")
  }
  async createPost(inputPostData) {
    const response = await api.post('api/posts', inputPostData)
    logger.log('CREATED POST', response.data)
    const newPost = new Post(response.data)
    AppState.posts.push(newPost)
  }
  async getPostsbyQuery(searchQuery) {
    const response = await api.get(`api/posts?query=${searchQuery}`)
    logger.log('GOT POSTS WITH SEARCHQUERY', response.data)
    const newPosts = response.data.posts.map(postPOJO => new Post(postPOJO))
    AppState.searchedPosts = newPosts
  }
  async getAllPosts() {
    AppState.posts = null
    const response = await api.get('api/posts')
    logger.log('GOT POSTS', response.data)
    const newPosts = response.data.posts.map(postPOJO => new Post(postPOJO))
    AppState.posts = newPosts
  }

  async getPostsbyCreatorId(profileId) {
    const response = await api.get(`api/profiles/${profileId}/posts`)
    logger.log('GOT POSTS FROM PROFILE', response.data)
    const newPosts = response.data.posts.map(postPOJO => new Post(postPOJO))
    AppState.posts = newPosts
  }
}

export const postsService = new PostsService()