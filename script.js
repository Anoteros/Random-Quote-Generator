$(document).ready(function(){

var colors = ['#4C7983', '#594344', '#49948B'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
var body = document.getElementById('body');
body.style.background = random_color;

     	$.ajax({
     		type: 'GET',
     		headers: {
     		"X-Mashape-Key" : 'trzLbbG9FrmshdOhPucDlwq6IrFBp1rmd3jjsnqGC7MepqPaLY' },
     		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',
     		success: function(data) {
     			console.log('success', data);
     			$('#quote').append("<blockquote>" + data.quote + "</blockquote>");
     			$('#author').append("<cite>" + data.author + "</cite>");
     			$('#tweetThis').attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + data.quote + '"' + " -" + data.author );
     		}
     });
 });

