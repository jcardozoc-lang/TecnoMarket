// ==========================================
// CAMBIO DE SECCIONES
// ==========================================

function mostrarSeccion(id, boton) {

    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(seccion) {

        seccion.classList.remove("activa");

    });


    const seccionSeleccionada =
        document.getElementById(id);


    if (seccionSeleccionada) {

        seccionSeleccionada.classList.add("activa");

    }


    const botones =
        document.querySelectorAll(".menu-btn");


    botones.forEach(function(btn) {

        btn.classList.remove("active");

    });


    if (boton) {

        boton.classList.add("active");

    }


    const titulos = {

        inicio: "Dashboard de Seguridad",

        empresa: "Información de la Empresa",

        seguridad: "Seguridad de la Información",

        iso: "ISO/IEC 27001",

        riesgos: "Gestión de Riesgos",

        matriz: "Matriz de Riesgos",

        plan: "Plan de Acción"

    };


    const tituloPagina =
        document.getElementById("tituloPagina");


    if (tituloPagina && titulos[id]) {

        tituloPagina.textContent =
            titulos[id];

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



// ==========================================
// FILTRO DE RIESGOS
// ==========================================

function filtrarRiesgos() {

    const filtro =
        document.getElementById("filtroRiesgo");


    const filas =
        document.querySelectorAll(
            "#tablaRiesgos tbody tr"
        );


    filas.forEach(function(fila) {

        const nivel =
            fila.getAttribute("data-nivel");


        if (filtro.value === "Todos") {

            fila.style.display = "";

        }

        else if (nivel === filtro.value) {

            fila.style.display = "";

        }

        else {

            fila.style.display = "none";

        }

    });

}



// ==========================================
// ACTUALIZAR INDICADORES
// ==========================================

function actualizarIndicadores() {

    const filas =
        document.querySelectorAll(
            "#tablaRiesgos tbody tr"
        );


    let criticos = 0;

    let altos = 0;


    filas.forEach(function(fila) {

        const nivel =
            fila.getAttribute("data-nivel");


        if (nivel === "Crítico") {

            criticos++;

        }


        if (nivel === "Alto") {

            altos++;

        }

    });


    const totalRiesgos =
        document.getElementById("totalRiesgos");


    const totalCriticos =
        document.getElementById("totalCriticos");


    const totalAltos =
        document.getElementById("totalAltos");


    if (totalRiesgos) {

        totalRiesgos.textContent =
            filas.length;

    }


    if (totalCriticos) {

        totalCriticos.textContent =
            criticos;

    }


    if (totalAltos) {

        totalAltos.textContent =
            altos;

    }

}



// ==========================================
// FILTRO DEL PLAN DE ACCIÓN
// ==========================================

function filtrarPlan() {

    const filtro =
        document.getElementById("filtroPrioridad");


    const filas =
        document.querySelectorAll(
            "#tablaPlan tbody tr"
        );


    filas.forEach(function(fila) {

        const prioridad =
            fila.getAttribute("data-prioridad");


        if (filtro.value === "Todas") {

            fila.style.display = "";

        }

        else if (prioridad === filtro.value) {

            fila.style.display = "";

        }

        else {

            fila.style.display = "none";

        }

    });

}



// ==========================================
// INICIO
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        actualizarIndicadores();

    }
);