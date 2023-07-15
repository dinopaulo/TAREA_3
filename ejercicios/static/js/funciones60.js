var primeroNumero = 1;
        var segundoNumero = 10;

        var Secuencianumeros = "";
        for (var i = primeroNumero + 1; i < segundoNumero; i++) {
            Secuencianumeros += i + " ";
        }

        document.getElementById("numeroSecuencia").textContent = Secuencianumeros;