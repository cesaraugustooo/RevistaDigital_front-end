const BACKEND2 = 'http://localhost/RevistaDigital_API'

async function postMateria(){
    event.preventDefault(); 
    const titulo_post = document.getElementById('titulo_post').value;
    const foto_post = document.getElementById('foto_post').value;
    const descricao_post = document.getElementById('descricao_post').value;
    const data_criacao_post = document.getElementById('data_criacao_post').value;
    const usuarios_id_usuario = document.getElementById('usuarios_id_usuario').value;
    var categoriasInput = document.getElementById('categorias_id_categoria').value;
    const categorias_id_categoria = parseInt(categoriasInput)

    const dados ={
        titulo_post: titulo_post,
        foto_post: foto_post,
        descricao_post: descricao_post,
        data_criacao_post: data_criacao_post,
        usuarios_id_usuario: usuarios_id_usuario,
        categorias_id_categoria: categorias_id_categoria,
        status_post: 0
    }

        try {
            const response = await fetch(`${BACKEND2}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            });

            if(response.ok){
                document.getElementById('status_categoria').innerHTML = `<div class="alert alert-success>Materia criada com sucesso!!!</div>`
            }
           
        } catch (error) {
            document.getElementById('status_categoria').innerHTML = `<div class="alert alert-danger">Erro ao criar categoria: ${error.message}</div>`;
        }
}
