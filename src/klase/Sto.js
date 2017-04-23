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

  reset() {
    this.pica = []
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

  render() {
    aktivniSto.innerHTML = `
      <h1>${this.ime}</h1>
      <p>DUG: ${this.dug}</p>
      <p>NOVA TURA: ${this.noviDug}</p>
    `
  }

  stampajRacun() {
    let sablon = `
      <h1>${this.ime}</h1>
      <ul>
    `
    this.pica.map(pice => {
      sablon += `<li><span>${pice.naziv}</span>: <span>${pice.cena}</span></li>`
    })
    sablon += `
      </ul>
      <p><b>UKUPNO</b>: ${this.dug}</p>
    `
    aktivniSto.innerHTML = sablon
  }
}
