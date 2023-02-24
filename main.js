//Сделал два чтобы сбрасывался результат
function result() {
    let note2 = document.querySelector(".note-content2");
    let note = document.querySelector(".note-content");
    let gender = document.getElementById("check").checked;
    let input_weight = document.getElementById("input_weight").value;
    let input_squatting = document.getElementById("input_squatting").value;
    let input_bench = document.getElementById("input_bench").value;
    let input_deadlift = document.getElementById("input_deadlift").value;
    note.innerHTML = `Your answer?`;
    note2.innerHTML = `${getTitleInPowerliftingUkraine(gender,input_weight,input_squatting,input_bench,input_deadlift)}`;
}
//Сделал два чтобы сбрасывался результат
function resultWeak() {
    let note = document.querySelector(".note-content");
    let note2 = document.querySelector(".note-content2");
    note.innerHTML = 'Sport is for the weak, but I\'m strong';
    note2.innerHTML ='Your title in sport only?';
}
