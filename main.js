function result() {
    let note = document.querySelector(".note-content");
    let input_squatting = document.getElementById("input_squatting").value;
    let input_bench = document.getElementById("input_bench").value;
    let input_deadlift = document.getElementById("input_deadlift").value;
    let input_weight = document.getElementById("input_weight").value;
    let gender = document.getElementById("check").checked;
    let resultNow = +input_squatting + +input_deadlift + +input_bench;
    let string = 'DO DO DO DO IT AND DO DO GO SPORTS AGAIN!!!!!!';
    let stringUser;
    if (!gender) {
        switch (true) {
            case (+input_weight <= 40):
                switch (true) {
                    case (+resultNow >= 197.5):
                        string = 'You are a candidate for master of sports';
                        break;
                    case (+resultNow >= 170 && +resultNow < 197.5):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 155 && +resultNow < 170):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 140 && +resultNow < 155):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 43 && +input_weight > 40):
                switch (true) {
                    case (+resultNow >= 285):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 255 && +resultNow < 285):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 220 && +resultNow < 255):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 190 && +resultNow < 220):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 172.5 && +resultNow < 190):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 157.5 && +resultNow < 172.5):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 47 && +input_weight > 43):
                switch (true) {
                    case (+resultNow >= 315):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 280 && +resultNow < 315):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 242.5 && +resultNow < 280):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 210 && +resultNow < 242.5):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 190 && +resultNow < 210):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 175 && +resultNow < 190):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 52 && +input_weight > 47):
                switch (true) {
                    case (+resultNow >= 340):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 305 && +resultNow < 340):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 265 && +resultNow < 305):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 230 && +resultNow < 265):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 210 && +resultNow < 230):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 190 && +resultNow < 210):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 57 && +input_weight > 52):
                switch (true) {
                    case (+resultNow >= 370):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 332.5 && +resultNow < 370):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 290 && +resultNow < 332.5):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 250 && +resultNow < 290):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 227.5 && +resultNow < 250):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 207.5 && +resultNow < 227.5):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 63 && +input_weight > 57):
                switch (true) {
                    case (+resultNow >=410):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 365 && +resultNow < 410):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 317.5 && +resultNow < 365):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 275 && +resultNow < 317.5):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 250 && +resultNow < 275):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 227.5 && +resultNow < 250):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 72 && +input_weight > 63):
                switch (true) {
                    case (+resultNow >=442.5):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 392.5 && +resultNow < 442.5):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 340 && +resultNow < 392.5):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 295 && +resultNow < 340):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 270 && +resultNow < 295):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 245 && +resultNow < 270):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 84 && +input_weight > 72):
                switch (true) {
                    case (+resultNow >=480):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 425 && +resultNow < 480):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 370 && +resultNow < 425):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 320 && +resultNow < 370):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 292.5 && +resultNow < 320):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 265 && +resultNow < 292.5):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight > 84 ):
                switch (true) {
                    case (+resultNow >=520):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 460 && +resultNow < 520):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 400 && +resultNow < 460):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 347.5 && +resultNow < 400):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 315 && +resultNow < 347.5):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 287.5 && +resultNow < 315):
                        string = 'You have 3 rank';
                        break;
                }
                break;
        }
        stringUser='WOMAN '+string;
    } else {
        switch (true) {
            case (+input_weight <= 46):
                switch (true) {
                    case (+resultNow >= 300):
                        string = 'You are a candidate for master of sports';
                        break;
                    case (+resultNow >= 260 && +resultNow < 300):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 235 && +resultNow < 260):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 212.5 && +resultNow < 235):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 49 && +input_weight > 40):
                switch (true) {
                    case (+resultNow >= 320):
                        string = 'You are a candidate for master of sports';
                        break;
                    case (+resultNow >= 277.5 && +resultNow < 320):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 252.5 && +resultNow < 277.5):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 230 && +resultNow < 252.5):
                        string = 'You have 3 rank';
                        break;
                }
                break
            case (+input_weight <= 53 && +input_weight > 49):
                switch (true) {
                    case (+resultNow >= 452.5):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 402.5 && +resultNow < 452.5):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 350 && +resultNow < 402.5):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 305 && +resultNow < 350):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 275 && +resultNow < 305):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 250 && +resultNow < 275):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 59 && +input_weight > 53):
                switch (true) {
                    case (+resultNow >= 507.5):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 450 && +resultNow < 507.5):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 390 && +resultNow < 450):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 340 && +resultNow < 390):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 310 && +resultNow < 340):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 280 && +resultNow < 310):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 66 && +input_weight > 59):
                switch (true) {
                    case (+resultNow >= 585):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 520 && +resultNow < 585):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 450 && +resultNow < 520):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 392.5 && +resultNow < 450):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 357.5 && +resultNow < 392.5):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 325 && +resultNow < 357.5):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 74 && +input_weight > 66):
                switch (true) {
                    case (+resultNow >= 642.5):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 570 && +resultNow < 642.5):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 495 && +resultNow < 570):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 430 && +resultNow < 495):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 390 && +resultNow < 430):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 355 && +resultNow < 390):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 83 && +input_weight > 74):
                switch (true) {
                    case (+resultNow >= 695):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 615 && +resultNow < 695):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 532.5 && +resultNow < 615):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 465 && +resultNow < 532.5):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 422.5 && +resultNow < 465):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 382.5 && +resultNow < 422.5):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 93 && +input_weight > 83):
                switch (true) {
                    case (+resultNow >= 737.5):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 655 && +resultNow < 737.5):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 582.5 && +resultNow < 655):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 505 && +resultNow < 582.5):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 460 && +resultNow < 505):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 410 && +resultNow < 460):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 105 && +input_weight > 93):
                switch (true) {
                    case (+resultNow >= 777.5):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 690 && +resultNow < 777.5):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 600 && +resultNow < 690):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 520 && +resultNow < 600):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 472.5 && +resultNow < 520):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 430 && +resultNow < 472.5):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight <= 120 && +input_weight > 105):
                switch (true) {
                    case (+resultNow >= 815):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 725 && +resultNow < 815):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 630 && +resultNow < 725):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 547.5 && +resultNow < 630):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 497.5 && +resultNow < 547.5):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 452.5 && +resultNow < 497.5):
                        string = 'You have 3 rank';
                        break;
                }
                break;
            case (+input_weight > 120):
                switch (true) {
                    case (+resultNow >= 855):
                        string = 'You are a master of sports of international class';
                        break;
                    case (+resultNow >= 760 && +resultNow < 855):
                        string = 'You are a master of sports';
                        break;
                    case (+resultNow >= 660 && +resultNow < 760):
                        string = 'You are a candidate for master of sports';
                        break
                    case (+resultNow >= 572.5 && +resultNow < 660):
                        string = 'You have 1 rank';
                        break;
                    case (+resultNow >= 520 && +resultNow < 572.5):
                        string = 'You have 2 rank';
                        break;
                    case (+resultNow >= 472.5 && +resultNow < 520):
                        string = 'You have 3 rank';
                        break;
                }
                break;
        }
       stringUser='MEN '+string;
    }
    note.innerHTML = `<p>${stringUser}</p>`;
}
