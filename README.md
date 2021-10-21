TELEFONO

COMPONENTES:

    INFO:

(ok) - RENDERIZA mensaje al RECIBIR la condicion.

    DISPLAY:

(ok) - RECIBE y RENDERIZAR los numeros RECIBIDOS.

    ACTIONS:
    RENDERIZA los botones.
    Pasa el texto a los botones de action.
    Pasar una clase a los action.
    Le passa una función


        ACTION:
        - RENDERIZAR texto RECIBIdo.
        - RECIBE una classe.
        - RECIBE una funcion.
        - RECIBE un estado.


    KEYBOARD:
    (ok) - Pasa texto a Key.
    (ok) - Muestra un array de keys.
    (ok) - Pasa funcion a key según condicion.
    (ok) - RECIBE un estado para activar o desactivar botones.

        KEY:
        - RENDERIZAR los numeros RECIBIDOS.
        - RECIBE una funcion que se ejecuta al hacer onClick.
        - RECIBIR un estado de activo y desactivo


    APP:
    - Array vacia a la que le passas los valores de los botones seleccionados, con la condicion que acceptar un máximo 9 numeros.
    - Pasar esta array al display.

    - 9 Numeros:
        - Se activa boton llamada.

    - Función LLamar:
        - Bloquear teclado
        - Aparece Info
        - Se activa boton colgar
        - Se desactiva boton llamar
        - Activar cuenta atrás llamada 5 segundos.

    - Función colgar:
        - Desbloquear teclado.
        - Apagar Info
        - Se desactiva el boton colgar
        - Se activa el boton llamar
        - Borra array de numeros display.
