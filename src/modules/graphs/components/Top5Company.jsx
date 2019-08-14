//sort companyTotals

function Changer(a, b) {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  }

  companyTotals.sort(Changer);

  //list top 5 companies
  var i;
  for (i = 0; i < 4; i++) {
    if (companyTotals[i]) {
      $("#company").html(
        "<li>" + companyTotals[i][0] + " $" + companyTotals[i][1] + "</li>"
      );
    }
  }
