//DOM - MODELO DE OBJETOS DEL DOCUMENTO

document.getElementById('toggleInfo').addEventListener('click', function(){
    const infoSection = document.querySelector('.info');

    if(infoSection.classList.contains('oculto')) {
        infoSection.classList.remove('oculto');
        this.textContent = 'Ocultar Informacion Personal';
    } else {
        infoSection.classList.add('oculto')
        this.textContent = 'Mostrar Informacion Personal';
    }

});

//Funcion para cambiar la imagen de perfil
function changeProfileImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function (event) {
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profileImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

//Agregar evento de click a la imagen de perfil
document.getElementById('profileImage') .addEventListener('click', changeProfileImage);