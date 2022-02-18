 const API_KEY = '64a2cb66f8b45c3629b2fffe55444be2';
 const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w200';
 const language = 'language=pt-BR';


function Randomizar(){
  let random = Math.floor(Math.random() * 950)
  return random
}



export async function PegarApi(){
  let Random = Randomizar()
  try{
    let response = await fetch(`${BASE_URL}${Random}?api_key=${API_KEY}&${language}`)
    let data1 = await response.json()
    return  data1
  } catch(error){
    console.log(error)
  }
}


