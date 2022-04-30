export class Cafe{
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  savor: string;
  altura:number;
  imagen: string;

  constructor(id: number, nombre: string, tipo: string, region: string, savor: string, altura: number, imagen: string){
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.savor = savor;
    this.altura = altura;
    this.imagen = imagen;
  }

}
