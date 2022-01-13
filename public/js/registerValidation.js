window.onload = () => {
    let form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        let errors = [];
        let mail = document.querySelector('#e-mail');
        let password = document.querySelector('#password');
        let name = document.querySelector('#name');
        let image = document.querySelector('#img');
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

        var filePath = image.value;
        if(!allowedExtensions.exec(filePath)){
            errors.push('Los formatos validos de imagen son: .jpeg/.jpg/.png/.gif');
        };

        if (name.value == '') {
            errors.push('El nombre no puede ser vacio');
        };

        if (name.value.length < 2) {
            errors.push('El nombre debe tener al menos 2 caracteres');
        };

        if (mail.value == '') {
            errors.push('El mail no puede ser vacio');
        };

        let valor = mail.value;
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
        } else {
            alert("La dirección de email es incorrecta!.");
        };
           
        if (password.value == '') {
            errors.push('La contraseña no puede ser vacia');
        };
        
        if (password.value.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres');
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
            form.submit();
        }
    });
}