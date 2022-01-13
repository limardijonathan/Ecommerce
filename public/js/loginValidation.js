window.onload = () => {
    let form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        let errors = [];
        let mail = document.querySelector('#e-mail');
        let password = document.querySelector('#password');

        if (mail.value == '') {
            errors.push('El mail no puede ser vacio');
        };

        let valor = mail.value;
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
        } else {
            errors.push("La dirección de email es incorrecta!.");
        };

        if (password.value == '') {
            errors.push('La contraseña no puede ser vacia');
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