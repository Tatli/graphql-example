import { cache } from 'react';
import { Animal } from '../migrations/00000-createTableAnimals';
import { sql } from './connect';

export const getAnimals = cache(async () => {
  const animals = await sql<Animal[]>`
    SELECT * FROM animals
 `;
  return animals;
});

export const getAnimalById = cache(async (id: number) => {
  const [animal] = await sql<Animal[]>`
    SELECT
      *
    FROM
      animals
    WHERE
      id = ${id}
  `;
  return animal;
});
