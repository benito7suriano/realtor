import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  try {
    const res = await axios.get((url), {
      headers: {
      'X-RapidAPI-Key': '858ecb542emshbc1665c8f1dab39p146d8ejsnff9942d9c91e',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
    })
    const data = res.data
  } catch (error) {
    console.error(error)
  }
}
