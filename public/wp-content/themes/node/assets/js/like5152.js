(function($){'use strict';var like={};edgtf.modules.like=like;like.edgtfLikes=edgtfLikes;like.edgtfOnDocumentReady=edgtfOnDocumentReady;like.edgtfOnWindowLoad=edgtfOnWindowLoad;like.edgtfOnWindowResize=edgtfOnWindowResize;like.edgtfOnWindowScroll=edgtfOnWindowScroll;$(document).ready(edgtfOnDocumentReady);$(window).load(edgtfOnWindowLoad);$(window).resize(edgtfOnWindowResize);$(window).scroll(edgtfOnWindowScroll);function edgtfOnDocumentReady(){edgtfLikes();}
function edgtfOnWindowLoad(){}
function edgtfOnWindowResize(){}
function edgtfOnWindowScroll(){}
function edgtfLikes(){$(document).on('click','.edgtf-like',function(){var likeLink=$(this),id=likeLink.attr('id'),type;if(likeLink.hasClass('liked')){return false;}
if(typeof likeLink.data('type')!=='undefined'){type=likeLink.data('type');}
var dataToPass={action:'node_edge_like',likes_id:id,type:type};var like=$.post(edgtfLike.ajaxurl,dataToPass,function(data){likeLink.html(data).addClass('liked').attr('title','You already like this!');if(type!=='portfolio_list'){likeLink.children('span').css('opacity',1);}});return false;});}})(jQuery);