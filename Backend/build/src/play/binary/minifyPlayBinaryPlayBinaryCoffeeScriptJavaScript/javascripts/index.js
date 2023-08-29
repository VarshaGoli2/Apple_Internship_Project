(function() {
  $(function() {
    return $.get("/persons", function(persons) {
      return $.each(persons, function(index, person) {
        return $("#persons").append("<li>" + person.name + "( " + person.city + " ) <a href='/persons/update/" + person.name + "'> Edit </a></li>");
      });
    });
  });

}).call(this);
