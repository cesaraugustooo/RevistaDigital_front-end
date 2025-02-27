
async function postMateria(){
    const titulo_post = document.getElementById('titulo_post').value;
    const foto_post = document.getElementById('foto_post').value;
    const descricao_post = document.getElementById('descricao_post').value;
    const data_criacao_post = document.getElementById('data_criacao_post').value;
    const usuarios_id_usuario = document.getElementById('usuarios_id_usuario').value;
    var categorias_id_categoria = document.getElementById('categorias_id_categoria').value;

    switch(categorias_id_categoria){
        case 'Humanas':
            categorias_id_categoria = 1
            break;
        case 'Exatas':
            categorias_id_categoria = 3
            break;
        case 'Linguagens':
            categorias_id_categoria = 2
            break;
        case 'Ciencias' :
            categorias_id_categoria =4
            break;
    }

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
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            });

           
            document.getElementById('form-categoria').reset(); // Limpa o formulário
        } catch (error) {
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

            document.getElementById('form-categoria').reset(); // Limpa o formulário
        } catch (error) {
            // Exibe mensagem de erro
            document.getElementById('status_categoria').innerHTML = `<div class="alert alert-danger">Erro ao criar categoria: ${error.message}</div>`;
        }
}

