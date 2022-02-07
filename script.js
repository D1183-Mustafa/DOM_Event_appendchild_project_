const form = document.querySelector("form");
const input = document.querySelector(".isim");
const liste = document.querySelector(".liste_ul")

kaydet();

function kaydet() {
    form.addEventListener("submit",olay);
}

function olay(event) {
    if (input.value === ""){
        alert("Lütfen İsim ve Soyisim giriniz!");
    }else {
        const li = document.createElement("li");
        li.setAttribute("class","liste_ul_li");
        li.appendChild(document.createTextNode(input.value));
    
        const a = document.createElement("a");
        a.setAttribute("href","#")
        a.setAttribute("class","Çarpı_tuşu");
    
    
    
        const img = document.querySelector("img")
        img.setAttribute("src","https://img.icons8.com/wired/30/000000/close-window.png")

        a.appendChild(img)
        li.appendChild(a);
        liste.appendChild(li);
        console.log(liste);

    }


    

    input.value = "";

    event.preventDefault();

}