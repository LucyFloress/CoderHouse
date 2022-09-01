function limpiar() {
    document.getElementById('Formulario').reset();
}
    function suma() {
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = x+y;
    }

    function resta() {
        var x = parseInt(document.getElementById('num1').value);
        var y = parseInt(document.getElementById('num2').value);
        document.getElementById('resultado').innerHTML = x-y;
        }

    function multiplicacion() {
        var x = parseInt(document.getElementById('num1').value);
        var y = parseInt(document.getElementById('num2').value);
        document.getElementById('resultado').innerHTML = x*y;
        }

    function division() {
        var x = parseInt(document.getElementById('num1').value);
        var y = parseInt(document.getElementById('num2').value);
        document.getElementById('resultado').innerHTML = x/y;
        }

    function potencia() {
            var x = parseInt(document.getElementById('num1').value);
            var y = parseInt(document.getElementById('num2').value);
            document.getElementById('resultado').innerHTML = Math.pow(x,y);
            }