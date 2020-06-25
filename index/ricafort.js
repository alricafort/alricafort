//  FUNCTION FOR SKILLS BAR

function skills() {
    for (var i = 0; i < 11; i++) {
        move(i);
    }
}

function move(j) {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar" + [j]);
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= skillsRate[j]) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
var skillsRate = [0, 95, 90, 50, 40, 95, 95, 60, 90, 80, 50];

//make function that loops mybar[i], set interval for all