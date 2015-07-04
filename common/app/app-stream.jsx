import Rx from 'rx';
import { Router } from 'react-router';
import App from './App.jsx';

import childRoutes from './routes';

const router$ = Rx.Observable.fromNodeCallback(Router.run, Router);

const routes = Object.assign({ components: App }, childRoutes);

export default function app$(location) {
  return router$(routes, location);
}
