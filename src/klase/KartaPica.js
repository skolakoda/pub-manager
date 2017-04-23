import {pica} from '../podaci/pica'

export default class KartaPica {
  constructor(sto, id = 'meni') {
    this.sto = sto
    this.element = document.getElementById(id)
    this.element.appendChild(this.render())
    document.getElementById('zatvori').onclick = this.zatvori.bind(this)
  }

  render() {
    const sto = this.sto
    const div = document.createElement('div')
    div.innerHTML = `<h1>${sto.element.id}</h1>`
    pica.map(pice => {
      const p = document.createElement('p')
      p.innerHTML = `<span>${pice.naziv}</span>: <span>${pice.cena}</span>`
      p.onclick = () => sto.dodaj(pice)
      div.appendChild(p)
    })
    return div
  }

  otvori() {
    this.element.style.display = 'block'
  }

  zatvori() {
    this.element.style.display = 'none'
  }
}
