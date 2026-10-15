const usuarios = [
  { nombre: "carlos", activo: true, salario: 1200 },
  { nombre: "ana", activo: false, salario: 900 },
  { nombre: "sofia", activo: true, salario: 1800 }
];

// Filtramos solo los usuarios activos y aumentamos su salario en un 10%
const resultado = usuarios
  .filter(u => u.activo)
  .map(u => ({
    nombre: u.nombre.toUpperCase(),
    nuevoSalario: u.salario * 1.10
  }));

console.log(resultado);