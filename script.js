const data=[
    {
        title: "pink lake",
        src:"1.webp",
    },
    {
        title: "blue lake",
        src:"2.webp",
    },
    {
        title: "green",
        src:"3.png",
    },
]

console.log(data)

function changeHTMLInfo(slideNr){
    const title = data[slideNr].title
    const titleDOM=document.querySelector("h2")
    titleDOM.innerHTML=title
    const image = data[slideNr].src
    console.log (image)
    const imageDOM = document.querySelector("img")
    imageDOM.src = "img/"+image
}

changeHTMLInfo(2)