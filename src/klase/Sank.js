export default class Sank {
  constructor() {
    this.kartaPica = {}
    this.izdataPica = []  // map
    this.naplacenaPica = [] // map
  }

  izdajPice(pice) {
    // this.izdataPica.push(pice)
  }

  get ukupnoIzdato() {
    // izdataPica.map.reduce cena
  }

  // alias dnevniPazar
  get ukupnoNaplaceno() {
    // naplacenaPica.map.reduce cena
  }

  get jelBilans() {
    return this.ukupnoIzdato === this.ukupnoNaplaceno
  }

  get sacuvajStanje() {

  }
}
