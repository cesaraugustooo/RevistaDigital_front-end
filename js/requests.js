
const BACKEND = 'http://localhost/RevistaDigital_API'

async function get(ent){
    fetch(`${BACKEND}/${ent}`)
        .then(response => response.json())
        .then(data)
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
async function innerCard(){
    const api = await fetch(`${BACKEND}/posts`)

    const data = await api.json();
    console.log(data);
}

innerCard();

async function postCategoria(){
    const nome = document.getElementById('nome_categoria').value;
    const descricao = document.getElementById('descricao').value;

    const dados ={
        nome_categoria: nome,
        descricao_categoria: descricao
    }

        try {
            const response = await fetch('http://localhost/RevistaDigital_API/categorias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            });

            document.getElementById('status_categoria').innerHTML = `<div class="alert alert-success">Categoria criada com sucesso!</div>`;
            document.getElementById('form-categoria').reset(); 
        } catch (error) {
            document.getElementById('status_categoria').innerHTML = `<div class="alert alert-danger">Erro ao criar categoria: ${error.message}</div>`;
        }
}

async function postMateria(){
    const titulo_post = document.getElementById('titulo_post').value;
    const foto_post = document.getElementById('foto_post').value;
    const descricao_post = document.getElementById('descricao_post').value;
    const data_criacao_post = document.getElementById('data_criacao_post').value;
    const usuarios_id_usuario = document.getElementById('usuarios_id_usuario').value;
    const categorias_id_categoria = document.getElementById('categorias_id_categoria').value;


    const dados ={
        titulo_post: titulo_post,
        foto_post: foto_post,
        descricao_post: descricao_post,
        data_criacao_post: data_criacao_post,
        usuarios_id_usuario: usuarios_id_usuario,
        categorias_id_categoria: categorias_id_categoria
    }

        try {
            const response = await fetch('http://localhost/RevistaDigital_API/posts', {
                method: 'POST',
                headers:{'Content-Type': 'application/json',},
                body: JSON.stringify(dados)
        });

            document.getElementById('status_categoria').innerHTML = `<div class="alert alert-success">Categoria criada com sucesso!</div>`;
            document.getElementById('form-categoria').reset(); // Limpa o formulário
        } catch (error) {
            // Exibe mensagem de erro
            document.getElementById('status_categoria').innerHTML = `<div class="alert alert-danger">Erro ao criar categoria: ${error.message}</div>`;
        }
}



async function postUsers(){
    const user_usuario = document.getElementById('user_usuario').value;
    const senha_usuario = document.getElementById('senha_usuario').value;
    const nivel = document.getElementById('nivel').value;



    const dados ={
        user_usuario: user_usuario,
        senha_usuario: senha_usuario,
        nivel: nivel,
       
    }

        try {
            const response = await fetch('http://localhost/RevistaDigital_API/users', {
                method: 'POST',
                headers:{'Content-Type': 'application/json',},
                body: JSON.stringify(dados)
        });

            document.getElementById('status_categoria').innerHTML = `<div class="alert alert-success">Categoria criada com sucesso!</div>`;
            document.getElementById('form-categoria').reset(); // Limpa o formulário
        } catch (error) {
            // Exibe mensagem de erro
            document.getElementById('status_categoria').innerHTML = `<div class="alert alert-danger">Erro ao criar categoria: ${error.message}</div>`;
        }
}