import {Router} from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);

//Rota para os cachorros
router.get('/dogs', PageController.dogs);

//Rota para os gatos
router.get('/cats', PageController.cats);

//Rota para os Peixes
router.get('/fishes', PageController.fishes);

//Rota para procura
router.get('/search', SearchController.search);

export default router;
