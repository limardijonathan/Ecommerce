window.onload = () => {
    let form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        let errors = [];
        let name = document.querySelector('#name');
        let description = document.querySelector('#description');
        let image = document.querySelector('#image');
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

        var filePath = image.value;
        if(!allowedExtensions.exec(filePath)){
            errors.push('Los formatos validos de imagen son: .jpeg/.jpg/.png/.gif');
        };

        if (name.value == '') {
            errors.push('El nombre no puede ser vacio');
        };
        
        if (name.value.length < 5){
            errors.push('El nombre debe tener al menos 5 caracteres');
        };

        if (description.value.length < 20){
            errors.push('La descripción debe tener al menos 20 caracteres');
        };

        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

       if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
        for (let i = 0; i < errors.length; i++) {
            ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
        };
        }else{
            alert('La validación de los datos fué exitosa')
            form.submit();
        }




    });


}