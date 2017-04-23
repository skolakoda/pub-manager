import {pica} from '../podaci/pica'

const element = document.getElementById('karta-pica')

export default class KartaPica {

  static render() {
    let sablon = '<h1>Karta pića</h1>'
    pica.map(pice => {
      const li = document.createElement('li')
      li.innerHTML = `<span>${pice.naziv}</span>: <span>${pice.cena}</span>`
      console.log(li)
      sablon += `
      <li><span>${pice.naziv}</span>: <span>${pice.cena}</span></li>
      `
    })
    element.innerHTML = sablon
  }
}

// karta pica mora znati koji sto je poziva
