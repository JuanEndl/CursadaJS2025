// seccion 1 (galeriaS1)

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("galeriaS1");
  const cantidadImagenes = 3; // Ajustá según la cantidad real

  for (let i = 1; i <= cantidadImagenes; i++) {
    const img = document.createElement("img");
    img.src = `media/imagenesSeccion1/${i}.jpg`;
    img.alt = `Imagen`;
    img.style.width = "400px";
    img.style.margin = "10px";
    img.style.marginBottom = "-100px";
    contenedor.appendChild(img);
  }
});


// seccion 3 (galeriaS3)

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("galeriaS3");
  const cantidadImagenes = 4; // Ajustá según la cantidad real

  for (let i = 1; i <= cantidadImagenes; i++) {
    const img = document.createElement("img");
    img.src = `media/imagenesSeccion3/${i}.png`;
    img.alt = `Imagen`;
    img.style.width = "300px";
    img.style.margin = "10px";
    contenedor.appendChild(img);
  }
});