import Start from './components/StartPage/StartPage';
import Toys from './components/Toys/Toys';
import TeeDec from './components/TreeDecoration/TreeDicoration';
import App from './App';

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Start",
    element: <Start />,
  },
  {
    path: "/toys",
    element: <Toys />,
  },
  {
    path: "/TeeDec",
    element: <TeeDec />,
  },
];
export default routes;