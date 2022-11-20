import ListRestaurants from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListRestaurants, // default page
  '/detail/:id': Detail,
};

export default routes;
