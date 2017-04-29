import KartaPica from './KartaPica'
import Prozor from './Prozor'
import Sank from './Sank'
import presekStanja from '../funkcije/presekStanja'

const izlaz = document.getElementById('aktivni-sto')

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
    const presek = presekStanja(this.novaTura)
    Sank.izdajPice(presek)
    this.pica = this.pica.concat(this.novaTura)
    this.novaTura = []
  }

  reset() {
    this.pica = []
    this.novaTura = []
  }

  get noviDug() {
    return this.novaTura.map(p => p.cena).reduce((a, b) => a + b, 0)
  }

  get dug() {
    return this.pica.map(p => p.cena).reduce((a, b) => a + b, 0)
  }

  render() {
    const presek = presekStanja(this.novaTura)
    izlaz.innerHTML = `
      <h1>${this.ime}</h1>
      <p>DUG: ${this.dug}</p>
      <ul>
    `
    for (const naziv in presek) {
      const komada = presek[naziv]
      izlaz.innerHTML += `<li>${naziv} x ${komada}</li>`
    }
    izlaz.innerHTML += '</ul>'
    if (this.noviDug) izlaz.innerHTML += `<p>NOVA TURA: ${this.noviDug}</p>`
  }

  pokaziRacun() {
    const presek = presekStanja(this.pica)
    izlaz.innerHTML = `
      <h1>${this.ime}</h1>
      <ul>
    `
    for (const naziv in presek) {
      const komada = presek[naziv]
      izlaz.innerHTML += `<li>${naziv} x ${komada}</li>`
    }
    izlaz.innerHTML += `
      </ul>
      <p><b>UKUPNO</b>: ${this.dug}</p>
    `
  }
}
