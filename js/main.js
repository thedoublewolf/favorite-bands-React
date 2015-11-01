import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import './ajax_setup';
import Router from './router';

let $app = $('.app');
new Router($app).start();

// $(".image").mouseover(function() {
//   $(this).removeClass("band-image").addClass("band-image-scroll");
//   var maxscroll = $(this).width();
//   var speed = maxscroll * 15;
//   $(this).animate({
//     scrollLeft: maxscroll
//   }, speed, "linear");
// });

// $(".image").mouseout(function() {
//   $(this).stop();
//   $(this).removeClass("band-image-scroll").addClass("band-image");
//   $(this).animate({
//     scrollLeft: 0
//   }, 'slow');
// });


