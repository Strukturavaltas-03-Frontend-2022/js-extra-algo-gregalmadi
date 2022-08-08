# Algoritmizálás feladatok

## Előkészületek

1. Telepítsd a NodeJS-t: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Telepítsd az `ESLint` extensiont VS Code alá
3. Add ki az `npm i` parancsot

## Feladatok

A feladatok 4 csoportra vannak osztva nehézségi szint szerint:
- basic
- intermediate
- advanced
- expert

A `solutions` mappában az adott almappákban kell dolgoznod!   
A megadott HTML-fájlba nem kell írnod semmit, csak a JS-fájlokba dolgozz!  
Írj egy-egy függvényt a megadott néven, amely az alábbi algoritmusokat valósítja meg!  
A paraméterként átadott tömb minden esetben szekvenciális, hacsak a feladat másként nem írja!  
A `sort()` metódust és a `Math` object metódusait nem használhatod, hacsak a feladat másként nem írja!   
Amikor végeztél, push-old fel a megoldásod! 

## Tesztelés
Bármikor tesztelheted magad is a függvényeidet az alábbi parancsok segítségével: 
- `npm run test:bas` - a basic feladatokat teszteli
- `npm run test:int` - az intermediate feladatokat teszteli
- `npm run test:adv` - az advanced feladatokat teszteli
- `npm run test:exp` - az expert feladatokat teszteli
- `npm run test` - az összes feladatot teszteli
### Basic

- `min` mappa:   
  Írj egy függvényt, amely visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb legkisebb elemét! 
- `max` mappa:  
  Írj egy függvényt, amely visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb legnagyobb elemét! 
- `even-counter` mappa:   
  Írj egy függvényt, amely visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb páros elemeinek a számát! 
- `sum-and-avg` mappa:     
  Írj egy függvényt, amely visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb átlagát!
- `sum-and-avg` mappa:    
  Írj egy függvényt, amely visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb összegét! Használd fel az előző feladatban megírt `getSumOfTheElements` függvényt!

### Intermediate

- `search-counter` mappa:  
  Írj egy függvényt, amely első paraméterként kap egy csak egész számokat tartalmazó tömböt és másodikként egy egész számot! A függvény visszatérési értéke egy egész szám, amely megadja, hogy a tömbben hányszor fordult elő a paraméterként kapott szám.  
- `even-counter` mappa:  
  Írj egy függvényt, amely paraméterként egy pozitív egész számokat tartalmazó tömböt kap!
  A függvény visszatérési értéke egy olyan új tömb legyen, amely csak a páros számokat tartalmazza!  
- `odd-counter` mappa:  
  Írj egy függvényt, amely paraméterként egy pozitív egész számokat tartalmazó tömböt kap!
  A függvény visszatérési értéke egy olyan új tömb legyen, amely csak a páratlan számokat tartalmazza!  
- `number-string-sorter` mappa:  
  Írj egy függvényt, amely paraméterként egy olyan tömböt kap, amely azonos darabú egész számot és string-et tartalmaz véletlenszerű sorrendben! 
  Rendezd úgy a tömböt, hogy minden szám után egy string következzen!   
  Add vissza a tömböt! 
- `sort-by-asc` mappa:  
  Írj egy függvényt, amely paraméterként kap egy csak egész számokat tartalmazó tömböt! 
  A függvény visszatérési értéke egy olyan új tömb, amely növekvő sorrendben tartalmazza az elemeket.  
  Használd a `sort()` metódust!
### Advanced

- `section` mappa:  
  Írj egy függvényt, amely paraméterként két azonos elemszámú, csak egész számokat tartalmazó tömböt kap! 
  A visszatérési érték a két tömb metszete (halmazművelet, relációs algebra)!  
- `union` mappa:   
  Írj egy függvényt, amely paraméterként két azonos elemszámú, csak egész számokat tartalmazó tömböt kap! 
  A visszatérési érték a két tömb uniója (halmazművelet, relációs algebra)!  
- `difference` mappa:  
  Írj egy függvényt, amely paraméterként két azonos elemszámú, csak egész számokat tartalmazó tömböt kap! 
  A visszatérési érték a két tömb különbsége (halmazművelet, relációs algebra)!  
- `descartes` mappa:  
  Írj egy függvényt, amely paraméterként két azonos elemszámú, csak egész számokat tartalmazó tömböt kap!
  A visszatérési érték a két tömb Descartes-szorzata (halmazművelet, relációs algebra)!  
- `search` mappa:  
  Írj egy függvényt, amely paraméterként kap egy csak egész számokat tartalmazó tömböt és egy egész számot! 
  A függvény visszatérési értéke egy `boolean`, amelynek értéke `true`, ha a tömb tartalmazza a számot, és  `false`, ha nem. 
  Használj lineáris keresést; ha nem ismered, nézz utána!

### Expert
- `binary-search` mappa:    
  Írj egy függvényt, amely paraméterként kap egy csak egész számokat tartalmazó tömböt és egy egész számot! A függvény visszatérési értéke egy `boolean`, amelynek értéke `true`, ha a tömb tartalmazza a számot, és `false`, ha nem.  
  **Használj logaritmikus keresést; ha nem ismered, nézz utána!**
- `custom-sort` mappa:   
  Írj egy függvényt, amely a javított buborékos rendezés algoritmus segítségével rendezi a paraméterként kapott tetszőleges elemszámú tömb elemeit növekvő sorrendben! A **NEM szám** típusú elemeket rakd a tömb végére az eredeti sorrendben! Add vissza az új tömböt!  
  **A buborékos rendezési algoritmust a soron következő feladatoknál is használhatod!** 
- `nth-smallest` mappa:    
  Írj egy függvényt, amely két paramétert kap. Az első egy csak egész számokat tartalmazó tömb, a második **N** egy egész szám. A függvény visszaadja a paraméterként kapott tömb **N**-edik legkisebb elemét! 
- `nth-largest` mappa:  
  Írj egy függvényt, amely két paramétert kap. Az első egy csak egész számokat tartalmazó tömb, a második **N** egy egész szám. A függvény visszaadja a paraméterként kapott tömb **N**-edik legnagyobb elemét! 
- `insertion-sort` mappa:  
  Írj egy függvényt,  amely paraméterként kap egy tetszőleges elemszámú, csak egész számokat tartalmazó tömböt! A tömb elemeit rendezd növekvő sorrendbe! Ezután a felhasználótól kérj be egy számot (addig kérjünk be értéket, amíg valóban egy véges egész számot ad meg). A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem. 
  Add vissza a tömböt!
