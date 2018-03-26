import Sto from './klase/Sto'

const brojStolova = 6

for (let i = 1; i <= brojStolova; i++)
  new Sto(i, document.getElementById('kafana'))
