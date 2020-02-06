document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    let options = document.getElementsByTagName("li");
    var instances = M.Sidenav.init(elems, options);
  });