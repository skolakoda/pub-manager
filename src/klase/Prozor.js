export default class Prozor {
  constructor(id = 'prozor') {
    this.element = document.getElementById(id)

    document.getElementById('zatvori').onclick = this.zatvori.bind(this)
  }

  otvori() {
    this.element.style.display = 'block'
  }

  zatvori() {
    this.element.style.display = 'none'
  }
}
