
// Previa dos Botões da Barra de Navegação 



// Previa do Menu Iniciar
$(document).ready(function () {
    $(".menu-principal").mouseover(function () {
        $(".dropdown-menu-principal").css("display", "flex");
    });

    $(".menu-principal").mouseout(function () {
        $(".dropdown-menu-principal").css("display", "none");
    });

    $(".menu-arquivos").mouseover(function () {
        $(".dropdown-menu-gearexplorer").css("display", "flex");
    });

    $(".menu-arquivos").mouseout(function () {
        $(".dropdown-menu-gearexplorer").css("display", "none");
    });


});

  // Previa do GearExplorer