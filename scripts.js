// Obtener referencias a los elementos
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var columna1 = document.querySelector(".columna1");
var columna2 = document.querySelector(".columna2");
var columna4 = document.querySelector(".columna4");


btn1.addEventListener("click", function() {
  columna1.innerHTML = "<h2>Familia</h2><p>En diciembre de 2014 contrajo matrimonio con Gabriela Rodríguez, con quien tenía una relación de más de diez años.​ La primera hija de la pareja nació en agosto de 2019, la cual fue nombrada Layla.En febrero de 2018, en una visita a Jerusalén con motivo de la 32.ª Conferencia Internacional de Alcaldes, Bukele dijo que el abuelo de su esposa había sido judío sefardí.</p>";
});



btn2.addEventListener("click", function() {
    var nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = "<h2>Historia</h2><p>Nayib Armando Bukele Ortez (San Salvador, 24 de julio de 1981) es un político y empresario salvadoreño. Es presidente de la República de El Salvador desde el 1 de junio de 2019, cuando sucedió en ese cargo a Salvador Sánchez Cerén. Goza de una licencia de la función pública aprobada por la Asamblea Legislativa el 30 de noviembre de 2023 y que es vigente desde el 1 de diciembre hasta el 31 de mayo de 2024, para poder participar en la elección presidencial de 2024 según lo establecido en la sentencia de 2021 de la Sala de lo Constitucional de la Corte Suprema de Justicia.</p>";
  
    columna2.innerHTML = ""; 
    columna2.appendChild(nuevoContenido);
  });


  function clicEnBoton3() {
    var nuevaColumna = document.createElement("div");
    nuevaColumna.className = "columna3";
    nuevaColumna.innerHTML = "<h2>Bitcoin</h2><p>El 5 de junio de 2021, Bukele anunció que presentaría un proyecto de ley a la Asamblea Legislativa que convertiría a El Salvador en la primera nación en hacer del bitcoin (₿) una de las monedas de curso legal, además del colón salvadoreño (actualmente fuera de circulación, pero vigente legalmente) y el dólar estadounidense.​ </p>";
  
    document.querySelector(".contenedor").insertBefore(nuevaColumna, columna4);
  
    
    btn3.removeEventListener("click", clicEnBoton3);
  }
  
  btn3.addEventListener("click", clicEnBoton3);