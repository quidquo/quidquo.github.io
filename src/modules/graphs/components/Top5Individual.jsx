 //sort individualTotals
 function Comparator(a, b) {
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
    return 0;
  }

  individualTotals.sort(Comparator);

    //list top 5 individual contributors
    var j;
    for (j = 0; j < 4; j++) {
      if (individualTotals[j]) {
        $("#individual").html(
          "<li>" +
            individualTotals[j][0] +
            " " +
            individualTotals[j][1] +
            " $" +
            individualTotals[j][2] +
            "</li>"
        );
      }
    }