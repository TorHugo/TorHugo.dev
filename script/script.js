console.log(sites);

const linguagem_description = {
    javascript: "<p>Java Script</p>"
}


let linguagens = Array.from(languagues.getElementsByTagName("button"));
linguagens.map(function (linguagem) {
    linguagem.addEventListener("click", function (e) {
        sites.innerHtml += `
            <button style="background-color: #f7df1e;" class="${e.target.className}">${e.target.innerHtml}</button>
        `
    })
})