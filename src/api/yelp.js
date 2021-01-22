import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer JS8YklOa445Ohesz4PY6D_ELNHFGHKCsXALg8Ar5qU4R9KR1F5j8lP8VylFOwuNf-OvSmc1uoUGXe8ZWRmt82SiCMxznshEH_QVfTMuhL2GTkGMWkMoaWVFPbHIHYHYx'
  }
})