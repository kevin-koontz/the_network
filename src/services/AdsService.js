import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Ad } from "@/models/Ad.js"
import { AppState } from "@/AppState.js"


class AdsService {
  async getAds() {
    const response = await api.get('api/ads')
    logger.log('GOT ADS', response.data)
    const newAds = response.data.map(adPOJO => new Ad(adPOJO))
    AppState.ads = newAds
  }
}

export const adsService = new AdsService()