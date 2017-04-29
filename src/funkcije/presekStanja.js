/**
* @param: niz [] pica
* @return: mapa {} ime, broj
*/
const presekStanja = pica => {
  const stanje = {}
  pica.map(p => {
    stanje[p.naziv] = stanje[p.naziv] ? stanje[p.naziv] + 1 : 1
  })
  return stanje
}

export default presekStanja
