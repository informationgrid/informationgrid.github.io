$(function() {

  // build page context menu from headlines
  var headers = $('h2, h3, h4');
  var getLevel = function(ele) {
    return parseInt(ele.nodeName.replace("H", ""), 10);
  };
  var openSection = false;
  var html = "";

  for(var i=0, count=headers.length; i<count; i++) {
    var header = headers[i];
    if ($(header).closest(".no-toc").length == 0) {
      var level = getLevel(header);
      if (level === 2) {
        if (openSection) {
          html += "</ul>";
          openSection = false;
        }
        html += '<li><a href="#'+header.id +'">'+header.innerHTML+'</a>';
        var nextLevel = i<count-1 ? getLevel(headers[i+1]) : 0;
        if (nextLevel > 2) {
          html += '<ul class="nav">';
          openSection = true;
        }
      }
      else {
        html+= '<li><a href="#'+header.id +'">'+header.innerHTML+'</a></li>';
      }
    }
  }
  if (openSection) {
    html += "</ul>";
  }

  if (html === '') {
    $('[role=complementary] .back-to-top').hide();
  }
  else {
    $('.bs-docs-sidenav').html(html);
  }

  // adding classes to html generated from markdown
  $('h2').addClass('page-header');
  $('img').addClass('img-responsive');
  $('table').wrap('<div class="table-responsive"></div>');
  $('table').addClass('table table-bordered table-striped');

  // hide copy btn
  $('.zero-clipboard').hide();
});