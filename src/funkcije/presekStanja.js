/**
* @param: niz [] pica
* @return: mapa {} ime, broj
*/
const presekStanja = pica => {
  const mapa = {}
  pica.map(p =>
    mapa[p.naziv] = mapa[p.naziv] ? mapa[p.naziv] + 1 : 1
  )
  return mapa
}

export default presekStanja
