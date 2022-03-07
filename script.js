
let calcularCompra = document.getElementById("div_comprar").style.visibility = "visible"; // show
let ordenCompra = document.getElementById("div_resumen").style.visibility = "hidden"; // hide
let boton = document.getElementById("calcular");
let volver = document.getElementById("volver");
let Nota = document.querySelector("h6");
let cantidadPC = document.getElementById("incantidadPC").value
const pc = 820000;
let valorComprado
let descuento;

boton.addEventListener("click", function () {
    document.getElementById("div_comprar").style.visibility = "hidden";
    document.getElementById("div_resumen").style.visibility = "visible";
    let cantidadPC = document.getElementById("incantidadPC").value;
    valorComprado = pc * cantidadPC;
    document.getElementById("valor_compra").value= valorComprado;
    
    if (valorComprado >= 1640000 && valorComprado <= 3280000) {
        descuento = valorComprado * (parseFloat(0.15))
        document.getElementById("valor_descuento").value = descuento
        document.getElementById("total").value= parseFloat(valorComprado) + parseFloat(descuento)
        Nota.textContent="Su descuento fue del 15%"
    }
    else if (valorComprado > 3280000 && valorComprado <= 6560000) {
        descuento = valorComprado * (parseFloat(0.25))   
        document.getElementById("valor_descuento").value = descuento
        document.getElementById("total").value= parseFloat(valorComprado) + parseFloat(descuento)
        Nota.textContent="Su descuento fue del 25%"
    }
    else if (valorComprado > 6560000 && valorComprado <= 9840000) {
        descuento = valorComprado * (parseFloat(0.35))
        document.getElementById("valor_descuento").value = descuento
        document.getElementById("total").value= parseFloat(valorComprado) + parseFloat(descuento)
        Nota.textContent="Su descuento fue del 35%"
    }
    else if (valorComprado >9840000) {
        descuento = valorComprado * (parseFloat(0.35))
        document.getElementById("valor_descuento").value = 0
        document.getElementById("total").value= parseFloat(valorComprado) + parseFloat(descuento)
        Nota.textContent="No hay descuento para esta compra"
    }
})

volver.addEventListener("click", function () {
    document.getElementById("div_comprar").style.visibility = "visible";
    document.getElementById("div_resumen").style.visibility = "hidden";
})