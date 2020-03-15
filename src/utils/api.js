import axios from "axios";
import * as constants from "../constants/env/photoviewerApi";

class PVApi {
  static getImages(params = {}) {
    return axios.get(`${constants.PHOTOVIEWER_API_LOCAL_HOST}/v1/images`, {
      params: params
    });
  }
}

export default PVApi