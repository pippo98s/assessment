import './styles/main.scss'; 
// `` carattere da copiare 

let postsIdHolder = []

const addPost = (title , body , idn) =>{
  if(!postsIdHolder.includes(idn)){
    let container = document.getElementById("cards-holder")
    let card = document.createElement("div")
    card.setAttribute('class', 'card')
    card.setAttribute('id', `card-${idn}`)
    card.innerHTML = `
                    <h3>${title}</h3>
                    <p>${body}</p>
                    <a>Remove card</a>
                   `
    container.appendChild(card)
    let removeButton = document.querySelector(`#card-${idn} a`)
    removeButton.addEventListener('click', function(){
      removeCard(idn)
    })
    postsIdHolder.push(idn)
  }
}

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

const removeCard = id => {
  let cardEliminated = document.getElementById(`card-${id}`)
  cardEliminated.remove()
  for (let i = 0; i < postsIdHolder.length; i++) {
    if (postsIdHolder[i] === id){
      postsIdHolder.splice(i)
      return
    }
  }
}

let remover = document.getElementById("remover")
remover.addEventListener("click", ()=>{
  document.getElementById("cards-holder").innerHTML= ''
  postsIdHolder = []
})

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