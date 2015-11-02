import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import './ajax_setup';
import Router from './router';

// let appElement = document.querySelector('.app');

// new Router(appElement).start();

let $app = $('.app');
new Router($app).start();


