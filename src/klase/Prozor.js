const element = document.getElementById('prozor')
let trenutniSto = null

export default class Prozor {
  static otvori(sto) {
    element.style.display = 'block'
    trenutniSto = sto
  }

  static zatvori() {
    element.style.display = 'none'
    trenutniSto = null
  }

  static otkazi() {
    trenutniSto.otkaziTuru()
    Prozor.zatvori()
  }

  static potvrdi() {
    trenutniSto.potvrdiTuru()
    Prozor.zatvori()
  }
}

document.getElementById('otkazi').onclick = Prozor.otkazi
document.getElementById('potvrdi').onclick = Prozor.potvrdi
