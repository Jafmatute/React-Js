/** @format */

import heroes, { owners } from "./data/hero";
//Find
const getHeroById = (id) => heroes.find((hero) => hero.id === id);
//Filter
const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

console.log(getHeroById(1));
console.log(getHeroByOwner("DC"));
