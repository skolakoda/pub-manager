import KartaPica from './KartaPica'

const izdataPica = {}
const element = document.querySelector('#sank')
const pazarProzor = document.querySelector('#pazar')
const renderPazar = document.querySelector('#render-pazar')

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

  static otvoriPazar() {
    pazarProzor.style.display = 'block'
    console.log('otvoriPazar')
  }

  static zatvoriPazar() {
    pazarProzor.style.display = 'none'
  }

  static render() {
    renderPazar.innerHTML = '<ul>'
    for (const pice in izdataPica) {
      renderPazar.innerHTML += `<li>${pice} x ${izdataPica[pice]}</li>`
    }
    renderPazar.innerHTML += `
      </ul>
      <p><b>ukupno: ${Sank.pazar}</b></p>
    `
  }
}

element.addEventListener('click', Sank.render)
element.addEventListener('click', Sank.otvoriPazar)
document.getElementById('zatvori-pazar').onclick = Sank.zatvoriPazar
