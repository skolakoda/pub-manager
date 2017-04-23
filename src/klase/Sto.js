import KartaPica from './KartaPica'
import Prozor from './Prozor'

const aktivniSto = document.getElementById('aktivni-sto')

export default class Sto {
  constructor(id, ime) {
    this.element = document.getElementById(id)
    this.ime = ime
    this.pica = []
    this.novaTura = []
    this.element.addEventListener('click', this.otvori.bind(this))
  }

  otvori() {
    Prozor.otvori(this)
    KartaPica.render(this)
    this.render()
  }

  dodaj(pice) {
    this.novaTura.push(pice)
    this.render()
  }

  otkaziTuru() {
    this.novaTura = []
  }

  potvrdiTuru() {
    this.pica = this.pica.concat(this.novaTura)
    this.novaTura = []
  }

  /* return int */
  get noviDug() {
    return this.novaTura.map(p => p.cena).reduce((a, b) => a + b, 0)
  }

  /* return int */
  get dug() {
    return this.pica.map(p => p.cena).reduce((a, b) => a + b, 0)
  }

  // na OK dodati noviDug dugu
  render() {
    aktivniSto.innerHTML = `
      <h1>${this.ime}</h1>
      <p>DUG: ${this.dug}</p>
      <p>NOVA TURA: ${this.noviDug}</p>
    `
  }
}
