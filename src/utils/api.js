import axios from "axios";
import * as constants from "../constants/env/photoviewerApi";

class PVApi {
  static getImages(params = {}) {
    return axios.get(`${constants.PHOTOVIEWER_API_LOCAL_HOST}/v1/images`, {
      params: params
    });
  }

  static getDimensions() {
    return axios.get(`${constants.PHOTOVIEWER_API_LOCAL_HOST}/v1/images/dimensions`)
  }
}

export default PVApi