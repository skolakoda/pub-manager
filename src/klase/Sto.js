import KartaPica from './KartaPica'

export default class Sto {
  constructor(id) {
    this.element = document.getElementById(id)
    this.pica = []
    const kartaPica = new KartaPica(this)
    this.element.addEventListener('click', kartaPica.otvori.bind(kartaPica))
  }

  dodaj(pice) {
    this.pica.push(pice)
    document.getElementById('ukupno').innerHTML = this.ukupno
  }

  get ukupno() {
    return this.pica.map(p => p.cena).reduce((a, b) => a + b, 0)
  }
}
