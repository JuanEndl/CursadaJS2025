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