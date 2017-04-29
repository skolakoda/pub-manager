/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KartaPica__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prozor__ = __webpack_require__(3);



const izlaz = document.getElementById('aktivni-sto')

// prima narudzbinu[], vraca objekat popijenih pica
const presekStanja = narudzbina => {
  const stanje = {}
  narudzbina.map(pice => {
    stanje[pice.naziv] = stanje[pice.naziv] ? stanje[pice.naziv] + 1 : 1
  })
  return stanje
}

class Sto {
  constructor(id, ime) {
    this.element = document.getElementById(id)
    this.ime = ime
    this.pica = []
    this.novaTura = []
    this.element.addEventListener('click', this.otvori.bind(this))
  }

  otvori() {
    __WEBPACK_IMPORTED_MODULE_1__Prozor__["a" /* default */].otvori(this)
    __WEBPACK_IMPORTED_MODULE_0__KartaPica__["a" /* default */].render(this)
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Sto;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__klase_Sto__ = __webpack_require__(0);


for (let i = 1; i < 7; i++) {
  new __WEBPACK_IMPORTED_MODULE_0__klase_Sto__["a" /* default */](`sto${i}`, `Sto ${i}`)
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__podaci_pica__ = __webpack_require__(4);

const element = document.getElementById('karta-pica')

class KartaPica {

  static clear() {
    element.innerHTML = ''
  }

  // static cena(pice) {
  //   let cena
  //   pica.map(p => {
  //     if (p.naziv == pice) cena = p.cena
  //   })
  //   return cena
  // }

  static render(sto) {
    KartaPica.clear()
    const div = document.createElement('div')
    __WEBPACK_IMPORTED_MODULE_0__podaci_pica__["a" /* pica */].map(pice => {
      const p = document.createElement('p')
      p.innerHTML = `
      <img src="${pice.slika}">
      <span>${pice.naziv}</span>: <span>${pice.cena}</span>
      `
      p.onclick = () => sto.dodaj(pice)
      div.appendChild(p)
    })
    element.appendChild(div)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = KartaPica;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const element = document.getElementById('prozor')
let trenutniSto = null

class Narudzbina {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Narudzbina;


document.getElementById('otkazi').onclick = Narudzbina.otkazi
document.getElementById('potvrdi').onclick = Narudzbina.potvrdi
document.getElementById('racun').onclick = Narudzbina.racun
document.getElementById('reset').onclick = Narudzbina.reset


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const pica = [
  {
    naziv: 'točeno pivo',
    cena: 140,
    slika: './images/pivo.jpg'
  },
  {
    naziv: 'malo točeno pivo',
    cena: 90,
    slika: './images/pivo.jpg'
  },
  {
    naziv: 'rakija',
    cena: 90,
    slika: './images/rakija.jpg'
  },
  {
    naziv: 'kafa',
    cena: 60,
    slika: './images/kafa.png'
  }
]
/* harmony export (immutable) */ __webpack_exports__["a"] = pica;



/***/ })
/******/ ]);