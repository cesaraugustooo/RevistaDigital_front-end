async function getMateria(){
    try{
        const api = await fetch('http://localhost/RevistaDigital_API/categorias');
        const data = await api.json();
        console.log(data)
    }
    catch(error){
        console.error('Erro' ,error);
    }
}

getMateria();