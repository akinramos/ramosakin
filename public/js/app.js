$('#app').html(`<div id="loader">
  <div id="box"></div>
  <div id="hill"></div>
</div>`)





setTimeout(function(){
	x();
},3000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?t=Thor"
}).done(function(res){
	console.log(res);
	let html = `<center>


		<h1>${res.Title}</h1>
		</center>
		<div id="container">
		<div id="right">
		<img  width=500 height=700 src="${res.Poster}"/>
		<h4>OFFICIAL MOVIE TRAILER</h4> 
		<center>	
		<iframe width="500" height="315" src="https://www.youtube.com/embed/JOddp-nlNvQ" frameborder="0" allowfullscreen></iframe>
		</left>
		</div>
		<div id="left">
		<h2>MOVIE DESCIRPTION</h2>
		<h3>Plot: ${res.Plot}</h3>
		<h3>Writer: ${res.Writer}</h3>
		<h3>Actors: ${res.Actors}</h3>
		<h3>Type: ${res.Type}</h3>
		<h3>Released: ${res.Released}</h3>
		<h3>Runtime: ${res.Runtime}</h3>
		<h3>Genre: ${res.Genre}</h3>
		<h3>Director: ${res.Director}</h3>
		<h3>Language: ${res.Language}</h3>
		<h3>Country: ${res.Country}</h3>
		<h3>Awards: ${res.Awards}</h3>
		</div>	`;


$('#app').html(html);


});
}

