import React, { useState } from "react";

const ImagenConCarga = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ position: "relative", width: 300, height: 300, border: "1px solid #ccc" }}>
      {loading && <p>Cargando...</p>}
      <img
        src={src}
        alt={alt}
        style={loading ? { display: "none" } : { width: "100%", height: "100%" }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

const Graficos = () => {
  const urlGrafico1 = "http://localhost:8000/grafico/usuarios-por-tipo";
  const urlGrafico2 = "http://localhost:8000/grafico/matriculas-por-genero";

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h3>Cantidad de usuarios registrados</h3>
        <ImagenConCarga src={urlGrafico1} alt="Usuarios por tipo" />
      </div>
      <div>
        <h3>Matrículas por Género</h3>
        <ImagenConCarga src={urlGrafico2} alt="Matrículas por género" />
      </div>
    </div>
  );
};

export default Graficos;
