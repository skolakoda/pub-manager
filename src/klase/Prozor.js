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
    document.getElementById('potvrdi').style.display = 'inline'
  }

  static potvrdi() {
    trenutniSto.potvrdiTuru()
    Prozor.zatvori()
  }

  static racun() {
    trenutniSto.stampajRacun()
  }

  static reset() {
    trenutniSto.reset()
    Prozor.zatvori()
  }
}

document.getElementById('otkazi').onclick = Prozor.otkazi
document.getElementById('potvrdi').onclick = Prozor.potvrdi
document.getElementById('racun').onclick = Prozor.racun
document.getElementById('reset').onclick = Prozor.reset
