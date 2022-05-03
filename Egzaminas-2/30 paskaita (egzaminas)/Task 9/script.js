/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    let wasExpensive = budget > 100000000 ? 'true' : 'false'
    console.log(wasExpensive)
}

const myMovie = new Movie("namai", "aš", 100000000)