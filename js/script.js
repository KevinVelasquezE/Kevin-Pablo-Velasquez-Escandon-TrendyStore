
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    alert('click derecho deshabilitado');
});

// Deshabilitar teclas de desarrollador
document.addEventListener('keydown', function(e) {
 if (e.ctrlKey && e.key === 'c'){
    e.preventDefault
    alert('Copiar deshabilitado');
         }
});

// script para bloquear teclas de mi teclado
document.addEventListener('keydown', function(event) {
    if(event.key === 'F12' || event.keyCode === 123 ){
        event.preventDefault();
        alert('F12 deshabilitado');
    }
});