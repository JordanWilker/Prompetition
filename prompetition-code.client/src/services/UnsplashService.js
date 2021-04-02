import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { unsplashApi } from './AxiosService'

class UnsplashService {
  async getImages() {
    try {
      const res = await unsplashApi.get()
      AppState.images = res.data
    } catch (err) {
      logger.error('Couldnt retrieve unsplash images \n', err)
    }
  }
}

export const unsplashService = new UnsplashService()
