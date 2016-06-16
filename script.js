// Sandbox for json
$(function() {
  $body = $('body');

  $.getJSON('https://teamtreehouse.com/geoffreyemerson.json', function(json, textStatus) {
    console.log(json);
    $body.append($('<h2>').html(json.name + $('<img>').attr({'src':json.gravatar_url,'class':'headshot'}).prop('outerHTML')));
    $body.append($('<hr>'));
    $(json.badges)
    .filter(function(){
      return (this.name.indexOf('SQL') > -1);
    })
    .each(function(index, el) {
      $body
        .append($('<div>')
          .append($('<img>').attr('src', el.icon_url))
          .append($('<p>').html(el.name + '<br>' + niceDate(el.earned_date)))
        );
    });
    $body.append(
      $('<div>').append(
        $('<p>').append(
          $('<a>').attr('href',json.profile_url).text('(Full list)')
        )
      )
    );
  });
});

function niceDate(date) {
  return $.datepicker.formatDate( 'M d, yy', new Date(date) );
}
