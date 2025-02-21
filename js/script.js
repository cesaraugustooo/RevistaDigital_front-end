
const BACKEND = 'http://localhost:8000'

async function getMateria(){
    try{
        const api = await fetch(`${BACKEND}/posts`);
        const data = await api.json();
        console.log(data)
    }
    catch(error){
        console.error('Erro' ,error);
    }
}
async function inerMateria(){
    try {
        const api = await fetch(`${BACKEND}/posts`);
    
        const data = await api.json();
    
        const publiSection = document.getElementById('publis'); 
        publiSection.innerHTML = ''; 
        data.forEach(post => {
            publiSection.innerHTML += `
                <div class="materias" style="max-height: 700px;"><div class="titulo"><h1 class="title">${post.titulo_post}</h1>
                </div><div class="img"><img src="${post.foto_post}" alt=""></div><div class="conteudo"><p>${post.descricao_post}</p></div></div>`;
            
        });
    

        console.log(data);
    } catch (error) {
        console.error('Erro:', error);
    }
    
}



inerMateria();