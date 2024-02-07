function Animal(especie, dieta, classificacao){
    this.especie = especie;
    this.dieta = dieta;
    this.classificacao = classificacao;
}


function Cachorro(raca){
    Animal.call(this, "Cachorro", "Ração", "Mamífero")
    this.raca = raca;
}

function Urso(tipo){
    Animal.call(this, "Urso", "Onívoro", "Mamífero")
    this.tipo = tipo;
}

const cachorro1 = new Cachorro("Labrador");
const animal1 = new Animal("Crododilo", "Carne", "Réptil")
const urso1 = new Urso("Polar");

console.log(cachorro1);
console.log(animal1);
console.log(urso1);