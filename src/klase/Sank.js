import KartaPica from './KartaPica'

const izdataPica = {}
const element = document.querySelector('#sank')

// singlton
export default class Sank {

  static izdajPice(mapaPica) {
    for (const naziv in mapaPica) {
      if (naziv in izdataPica) izdataPica[naziv] += mapaPica[naziv]
      else izdataPica[naziv] = mapaPica[naziv]
    }
  }

  static get pazar() {
    let ukupno = 0
    for (const pice in izdataPica) {
      const cena = KartaPica.cena(pice)
      ukupno += izdataPica[pice] * cena
    }
    return ukupno
  }

  static get sacuvajStanje() {

  }

  static render() {
    let sablon = '<b>Dnevni pazar</b><ul>'
    for (const pice in izdataPica) {
      sablon += `<li>${pice} x ${izdataPica[pice]}</li>`
    }
    sablon += `
      </ul>
      <b>ukupno: ${Sank.pazar}</b>
    `
    element.innerHTML = sablon
  }
}

element.addEventListener('click', Sank.render)
