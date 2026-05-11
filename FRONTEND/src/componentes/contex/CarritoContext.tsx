import { createContext, useContext, useState } from "react";

type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

type CarritoContextType = {
  carrito: Producto[];
  agregar: (producto: Producto) => void;
  limpiar: () => void;
};

const CarritoContext = createContext<CarritoContextType | null>(null);

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  return context;
};

export const CarritoProvider = ({ children }: any) => {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregar = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  const limpiar = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregar, limpiar }}>
      {children}
    </CarritoContext.Provider>
  );
};