import Prozor from './Prozor'
const prozor = new Prozor()
import KartaPica from './KartaPica'

export default class Sto {
  constructor(id) {
    this.element = document.getElementById(id)
    this.pica = []
    this.element.addEventListener('click', this.otvori.bind(this))
  }

  otvori() {
    prozor.otvori()
    KartaPica.render()
  }

  dodaj(pice) {
    this.pica.push(pice)
    // document.getElementById('ukupno').innerHTML = this.ukupno
  }

  undo() {
    // this.pica skida otpozadi
  }

  get ukupno() {
    return this.pica.map(p => p.cena).reduce((a, b) => a + b, 0)
  }

  render() {
    // narudzbina
  }
}
