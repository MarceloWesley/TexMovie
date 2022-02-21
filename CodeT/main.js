import {
   PegarApi, IMG_URL
} from './api.js'


const filmeImagem = document.getElementById('filmeImagem')
 const filmeTitulo = document.getElementById('filmeTitulo')
 const filmeSinopse = document.getElementById('filmeSinopse')
 const containerFilme = document.querySelector(".container-filme")
 const genero = document.querySelector('.genero')
 const originalTitle = document.querySelector('.titulo-original')
 const dataLançamento = document.querySelector(".data-lançamento")
 const Err = document.querySelector(".Error")
 const filmeImg = document.querySelector(".filme-img")
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

function RemoveErrorClassImg(){
  filmeImg.classList.remove("filme-img-error")
  textError.classList.remove("showText")
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
  }else{
    RemoveErrorClassImg()
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
    apiValidation(Data.success)
    RegistrarImagem(Data.poster_path)
    RegistrarTitulo(Data.title)
    RegistrarSinopse(Data.overview)
    RegistrarGenero(Data.genres)
    RegistrarTituloOriginal(Data.original_title)
    RegistrarDataLançamento(Data.release_date)
   
  })

 })













 