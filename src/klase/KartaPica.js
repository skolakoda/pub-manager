import {pica} from '../podaci/pica'
const element = document.getElementById('karta-pica')

export default class KartaPica {

  static clear() {
    element.innerHTML = ''
  }

  static render(sto) {
    KartaPica.clear()
    const ul = document.createElement('ul')
    pica.map(pice => {
      const li = document.createElement('li')
      li.innerHTML = `<span>${pice.naziv}</span>: <span>${pice.cena}</span>`
      li.onclick = () => sto.dodaj(pice)
      ul.appendChild(li)
    })
    element.appendChild(ul)
  }
}
