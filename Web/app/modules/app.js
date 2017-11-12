import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from '.config/config';
import home from './components/home';

angular.module('app', [uirouter, home])
  .config(routing);