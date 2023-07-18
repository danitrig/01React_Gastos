import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPResupuesto,
  setIsValidPresupuesto,
  gastos,
}) => {
  return (
    <header>
      <h1>Planificador - Gastos de Viaje</h1>
      {isValidPResupuesto ? (
        <ControlPresupuesto 
          gastos={gastos} 
          presupuesto={presupuesto} 
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
