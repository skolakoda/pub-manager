const element = document.getElementById('narudzbina')
let trenutniSto = null

// singlton
export default class Narudzbina {

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
    Narudzbina.zatvori()
    document.getElementById('potvrdi').style.display = 'inline'
  }

  static potvrdi() {
    trenutniSto.potvrdiTuru()
    Narudzbina.zatvori()
  }

  static racun() {
    trenutniSto.pokaziRacun()
  }

  static reset() {
    trenutniSto.reset()
    Narudzbina.zatvori()
  }
}

document.getElementById('otkazi').onclick = Narudzbina.otkazi
document.getElementById('potvrdi').onclick = Narudzbina.potvrdi
document.getElementById('racun').onclick = Narudzbina.racun
document.getElementById('reset').onclick = Narudzbina.reset
