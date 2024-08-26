function show(ind){
    var arr = ["Candy", "Tethreemino", "Train", "Cuttoo"]

    for (var i = 0 ; i < arr.length; i++){
        var url = "./" + arr[i] + "/" + "index.html";

        window.open(url);
    }
}