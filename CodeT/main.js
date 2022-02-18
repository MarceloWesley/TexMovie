import {
   PegarApi, IMG_URL
} from './api.js'


let filmeImagem = document.getElementById('filmeImagem')
 let filmeTitulo = document.getElementById('filmeTitulo')
 let filmeSinopse = document.getElementById('filmeSinopse')
 let containerFilme = document.querySelector(".container-filme")
 let genero = document.querySelector('.genero')
 let originalTitle = document.querySelector('.titulo-original')
 let dataLançamento = document.querySelector(".data-lançamento")
 let containerError = document.querySelector(".container-error")
 let Err = document.querySelector(".Error")
 let filmeImg = document.querySelector(".filme-img")
 const btnFilme = document.querySelector(".button")
 const textError = document.querySelector(".text-error")

 function apiValidation(sucess){
  if(sucess == false){
    Err.style.display = "block"
    Err.style.textAlign = "center"
    containerFilme.classList.remove('show')
  }else {
    containerFilme.classList.add('show')
    Err.style.display = "none"
  }
 }

function ErrorImg(){
  filmeImg.classList.add("filme-img-error")
  textError.textContent = "Imagem não encontrada"
  textError.classList.add("showText")
  console.log(textError)
}

function ErrorOverview(){
  filmeSinopse.innerHTML = "Sinopse não encontrada.";
}

function ErrorTitle(){
  filmeTitulo.innerHTML = "Titulo Não encontrado"
}

function RegistrarImagem(img){
  if(img === null){
   return ErrorImg()
  }
  filmeImagem.src = `${IMG_URL}${img}`
}

function RegistrarTitulo(title){
  if(title == ""){
    return ErrorTitle()
  }
  filmeTitulo.innerHTML = title
}

function RegistrarSinopse(overview){
  if(overview == ""){
   return ErrorOverview()
  }
  filmeSinopse.innerHTML = overview
}

function RegistrarGenero(genres){
  genero.innerHTML = ""
  genres.forEach((Element, index) => {
    genero.innerHTML += `${Element.name} `
    if(!((genres.length - 1) === index)){
      genero.innerHTML += ' - ';
    }
  })

}

function RegistrarTituloOriginal(OriginalTitle){
  originalTitle.innerHTML = OriginalTitle
}

function RegistrarDataLançamento(date){
  dataLançamento.innerHTML = date
}

 

 btnFilme.addEventListener("click", () => {
 let Dados = PegarApi()
  Dados.then(Data => {
    console.log(Data)
    apiValidation(Data.success)
    RegistrarImagem(Data.poster_path)
    RegistrarTitulo(Data.title)
    RegistrarSinopse(Data.overview)
    RegistrarGenero(Data.genres)
    RegistrarTituloOriginal(Data.original_title)
    RegistrarDataLançamento(Data.release_date)
   
  })

 })













 /*export async function PegarApi(){
  try{
    if(Random === Random){
      Random = Math.floor(Math.random() * 900)
    }
  return  fetch(`${BASE_URL}${Random}?api_key=${API_KEY}&${language}`)

  } catch(error){
    console.log(error)
  }
}

export function ReturnValues(){
 export const response = await getApi()
  export const data1 = await response.json()
}*/