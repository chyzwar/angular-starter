import angular from 'angular';

import Auth from './auth/auth';
import User from './user/user';

/**
 * appServices module will be a collection of reusable services
 * @type {Module}
 */
const appServices = angular.module('appServices', []);

/**
 * Register Serivices in module
 */
appServices.services('Auth', Auth);
appServices.services('User', User);


export default appServices.name;
