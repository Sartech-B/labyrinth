$(document).ready(function(){
  $.ajax({
    url: "https://api.github.com/repos/fossasia/labyrinth/contributors"
  }).done(function(data){
    data.forEach(function(contributors){
      var html = '<div class="column"><div class="card">';
      html += '<img src="https://github.com/'+contributors.login+'.png?size=300x300" height="300" width="308">';
      html += '<br>';
      html += '<div class="lol"><p>'+contributors.login+' ('+contributors.contributions;
      if (contributors.contributions === 1) {
        html += ' contribution)</p>';
      } else {
        html += ' contributions)</p>';
      }
      html += '<p><button class="button"> ';
      html += '<a href="'+contributors.html_url+'""> View on Github';
      html += '</button></p>';
      html += '</a></div></div></div>';
      $("#contributors").append(html);
    });
  });
}); 
