const button = document.getElementById("buttonTambah");

function add(){
    const container = document.getElementById("contain1")
    
    const divParent = document.createElement("div")
    divParent.classList.add("divutama");

    const anakPertama = document.createElement("div");
    anakPertama.classList.add("anakpertama")

    // const anakDariPertama = document.createElement("h1")
    // const anakPertamaText = document.createTextNode("B");
    // anakDariPertama.appendChild(anakPertamaText);
    // anakPertama.appenChild(anakDariPertama);
    divParent.appendChild(anakPertama);

    const anakKedua = document.createElement("div");
    anakKedua.classList.add("anakkedua");
    const anakKeduaSub1 = document.createElement("h1");
    anakKedua.classList.add("anakkeduasub1")
    const anakKeduaSub1Text = document.createTextNode("New Title");
    anakKeduaSub1.appendChild(anakKeduaSub1Text);
    anakKedua.appendChild(anakKeduaSub1);

    const anakKeduaSub2 = document.createElement("h1");
    anakKedua.classList.add("anakkeduasub2")
    const anakKeduaSub2Text = document.createTextNode("Last 24 Hours");
    anakKeduaSub2.appendChild(anakKeduaSub2Text);
    anakKedua.appendChild(anakKeduaSub2);
    divParent.appendChild(anakKedua);

    const textBaru1 = document.createElement("h1");
    textBaru1.classList.add("textbaru1");
    const textBaru1Text = document.createTextNode("+33%")
    // textBaru1Text.classList.add("textbaru1a");
    textBaru1.appendChild(textBaru1Text);
    divParent.appendChild(textBaru1)

    const textBaru2 = document.createElement("h1");
    textBaru1.classList.add("textbaru2");
    const textBaru2Text = document.createTextNode("491");
    textBaru2.appendChild(textBaru2Text);
    divParent.appendChild(textBaru2);

    container.appendChild(divParent);
}

button.addEventListener("click", function(){
    
    add();

} );

// const btn = document.querySelector("#closeBtn");
// const sidebar = document.querySelector("#subMenu");

// // add our event listener for the click
// btn.addEventListener("click", () => {
//     sidebar.classList.toggle("hidden");
// });

const toggle = document.getElementById("toggle");
toggle.addEventListener("click", function(){
    document.body.classList.toggle("body")
})

