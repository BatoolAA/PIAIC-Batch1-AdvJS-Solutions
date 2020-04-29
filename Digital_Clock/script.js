const startTime = () => {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if( h > 12){
      h = h - 12;
      session = "PM";
    }

    if( h == 0){
      h = 12;
    }

    var h = (h < 10) ? "0" + h : h;
    var m = (m < 10) ? "0" + m : m;
    var s = (s < 10) ? "0" + s : s;

    var t = h + ":" + m + ":" + s + " " + session;
    document.getElementById("digital").innerText = t;

    setTimeout(startTime, 1000);
  }

  
  