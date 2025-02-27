const BACKEND = 'http://localhost/RevistaDigital_API'

async function get(ent){
    fetch(`${BACKEND}/${ent}`)
        .then(response => response.json())
        .then(data)
}
async function inerDestaques(){
    try{
     const api = await fetch(`${BACKEND}/posts`);
     const data = await api.json();
    
     const arraySort= data.sort(() => Math.random() - 0.5);

     const dataArray = arraySort.slice(0, 3);

     
     console.log(dataArray);
     const cardBody = document.getElementById('row-card');
 
     cardBody.innerHTML = '';
     dataArray.forEach(materia => {
     cardBody.innerHTML +=`
           
    <div class="card" style="width: 18rem;">
    <img src="${materia.foto_post}" class="card-img-top" alt="...">
    <div id="card-body" class="card-body">
    <h5 class="card-title">${materia.titulo_post}</h5>
    <a href="#" class="btn btn-primary">Ir para a materia</a>
    </div>
    </div>
    </div>
           
    `
    });
    }catch(error){
         console.error('Erro ao inserir materias', error);
    }
     
 }
 
inerDestaques();

async function innerMaterias(area){

    try{
    
    const api = await fetch(`${BACKEND}/posts/categoria/${area}`);

    const data = await api.json();

    const cards = document.getElementById('posts');
    cards.innerHTML = '';

    data.forEach(post =>{
        cards.innerHTML += `
        <div style="margin-top: 100px;" class="card mb-3">
        <img src="${post.foto_post}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${post.titulo_post}</h5>
          <p class="card-text">${post.descricao_post}</p>
          <p class="card-text"><small class="text-body-secondary">Postado em ${post.data_criacao_post}</small></p>
        </div>
      </div>
        `
    })}catch(error){
        console.error('Erro ao inserir materias', error);
   }
    
}


