// import {callApi } from './functions';
import './styles/main.scss'; 
// `` carattere da copiare 

//array per controllare i post già selezionati
let postsIdHolder = [] 


// 1.Cliccando una voce della navigazione "card-trigger" verrà generata una Card nel div "cards-holder", in caso altre cards siano presenti si aggiungerà alle stesse.
// Se quella card fosse già presente non se ne  aggiungerà un'altra uguale
const addPost = (title , body , idn) =>{
  if(!postsIdHolder.includes(idn)){
    let container = document.getElementById("cards-holder")
    let card = document.createElement("div")
    card.setAttribute('class', 'card')
    card.setAttribute('id', `card-${idn}`)
    card.innerHTML = `
                    <h3>${title}</h3>
                    <p>${body}</p>
                    <a>remove card</a>
                   `
    container.appendChild(card)
    let removeButton = document.querySelector(`#card-${idn} a`)
    removeButton.addEventListener('click', function(){
      removeCard(idn)
    })
    postsIdHolder.push(idn)
  }
}


// 2.Il contenuto della card sarà recuperato da questo servizio: https://jsonplaceholder.typicode.com/posts/{id},
// usando il data-sku presente sui links come parametro.
const callApi = array =>{
  array.forEach(post => {
    post.addEventListener('click', () => {
      let PostNumber = post.getAttribute("data-sku");
      fetch(`https://jsonplaceholder.typicode.com/posts/${PostNumber}`)
        .then(response => response.json())
        .then(data => {
          let title = data.title
          let body = data.body
          let idn = data.id
          addPost(title, body, idn)
        });
    })
  })
}

let posts = document.querySelectorAll("#card-trigger li a[data-sku]");
callApi(posts)


// 3.La singola Card conterrà un bottone di rimozione della card stessa.
const removeCard = id => {
  let cardEliminated = document.getElementById(`card-${id}`)
  cardEliminated.remove()
  for (let i = 0; i < postsIdHolder.length; i++) {
    if (postsIdHolder[i] === id){
      // tolgo dall'array la carta eliminata
      postsIdHolder.splice(i,1)
      return
    }
  }
}

// click sul bottone che elimina tutte le carte già selezionate
let remover = document.getElementById("remover")
remover.addEventListener("click", ()=>{
  document.getElementById("cards-holder").innerHTML= ''
  postsIdHolder = []
})


// 4. Il card-trigger su mobile dovrà diventare una icona che espone al tap le voci di menu.
let hamburger = document.getElementById("hamburger")

hamburger.addEventListener('click' , ()=>{
  let postsElement = document.querySelectorAll("#card-trigger li");
  postsElement.forEach(post =>{
    if (post.getAttribute('class') == 'active'){
      post.classList.remove('active')
      post.classList.add('none')
    } else{
      post.classList.remove('none')
      post.classList.add('active')
    }
  })
})