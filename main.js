function bySelectedRequest(id, value) {
  $("#list").empty();
  document.getElementById("header-title").innerHTML = value + " Request/s";
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://reqres.in/api/users",
    data: "",
    success: function (data) {
      document.getElementById(id).innerHTML = data.data.length;
      for (let index = 0; index < data.data.length; index++) {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(
          document.createTextNode(
            data.data[index].first_name + " " + data.data[index].last_name
          )
        );
        ul.appendChild(li);
      }
    },
  });
}
