import React from "react";

const Gasto = ({ gasto }) => {
  const { cantidad, nombre, categoria, id } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="categoria">{cantidad}</p>
        </div>
      </div>
    </div>
  );
};

export default Gasto;
