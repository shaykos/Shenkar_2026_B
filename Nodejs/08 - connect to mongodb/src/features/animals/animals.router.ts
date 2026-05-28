import { Router } from 'express';
import { addAnimal } from './animals.ctrl.ts';

const animalRouter = Router();

//TODO: implement animal routes
animalRouter
    .post('/add', addAnimal);
    // .get('/list', listAnimals)
    // .get('/:id', getAnimalById)
    // .put('/:id', updateAnimal)
    // .delete('/:id', deleteAnimal);

export default animalRouter;

