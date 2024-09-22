import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Post } from "@/models/Post.js"


class PostsService {
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