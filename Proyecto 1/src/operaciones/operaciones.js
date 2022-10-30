export const precioDesUnitario = (precio, descuento) => (precio/100) * descuento;
export const precioDesTotal = (precio, descuento, cantidad) => (precioDesUnitario(precio,descuento)) * cantidad;
export const total = (precio, cantidad) => precio * cantidad;
export const totalDescuento = (precio, descuento, cantidad) => (total(precio, cantidad)) - precioDesTotal(precio, descuento, cantidad);