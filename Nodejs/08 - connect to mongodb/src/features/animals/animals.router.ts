import { Router } from 'express';
import { addAnimal, listAnimals, getAnimalById, updateAnimal, deleteAnimal } from './animals.ctrl.js';
import { saveToMemory } from '../../middlewares/files.js';

const animalRouter = Router();

//TODO: implement animal routes
animalRouter
    .post('/add', saveToMemory.single('file'), addAnimal)
    .get('/list', listAnimals)
    .get('/:id', getAnimalById)
    .put('/update/:id', updateAnimal)
    .delete('/delete/:id', deleteAnimal);

export default animalRouter;

