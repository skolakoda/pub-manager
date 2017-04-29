/**
* @param [] pica
* @return {} ime, broj
*/
const presekStanja = narudzbina => {
  const stanje = {}
  narudzbina.map(pice => {
    stanje[pice.naziv] = stanje[pice.naziv] ? stanje[pice.naziv] + 1 : 1
  })
  return stanje
}

export default presekStanja
