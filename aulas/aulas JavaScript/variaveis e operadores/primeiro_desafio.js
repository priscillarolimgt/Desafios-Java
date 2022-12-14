const precoCombustivel = 5.79;
const KmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / KmPorLitros;
const valorgasto = litrosConsumidos * precoCombustivel;

console.log(valorgasto.toFixed(2));