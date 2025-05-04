function reset() {
  location.reload();
}

function convert() {
  From = document.getElementById("converter").value;
  to = document.getElementById("converter1").value;
  x = document.getElementById("valuetoconvert").value;
  valuetoconvert = parseFloat(x);

  if (From == to) {
    document.getElementById("valueconverted").value = valuetoconvert;
  }

  // nep to other
  else if (From == "NPR" && to == "USD") {
    document.getElementById("valueconverted").value = valuetoconvert * 0.0084;
  } else if (From == "NPR" && to == "INR") {
    document.getElementById("valueconverted").value = valuetoconvert * 0.62;
  } else if (From == "NPR" && to == "GBP") {
    document.getElementById("valueconverted").value = valuetoconvert * 0.0062;
  }

  // usd to other
  else if (From == "USD" && to == "NPR") {
    document.getElementById("valueconverted").value = valuetoconvert * 119.6;
  } else if (From == "USD" && to == "INR") {
    document.getElementById("valueconverted").value = valuetoconvert * 74.71;
  } else if (From == "USD" && to == "GBP") {
    document.getElementById("valueconverted").value = valuetoconvert * 0.74;
  }

  //inr to other
  else if (From == "INR" && to == "NPR") {
    document.getElementById("valueconverted").value = valuetoconvert * 1.6;
  } else if (From == "INR" && to == "USD") {
    document.getElementById("valueconverted").value = valuetoconvert * 0.013;
  } else if (From == "INR" && to == "GBP") {
    document.getElementById("valueconverted").value = valuetoconvert * 0.0099;
  }

  //GBP to other
  else if (From == "GBP" && to == "NPR") {
    document.getElementById("valueconverted").value = valuetoconvert * 161.93;
  } else if (From == "GBP" && to == "USD") {
    document.getElementById("valueconverted").value = valuetoconvert * 1.35;
  } else if (From == "GBP" && to == "INR") {
    document.getElementById("valueconverted").value = valuetoconvert * 101.18;
  } else {
    alert("Please enter correctly!");
  }
}
