const btn = document.querySelector("button")
const text = document.querySelector(".text")
const author = document.querySelector(".author")

const array = [
    {text: "Because you are in control of your life. Don't ever forget that. You are what you are because of the conscious and subconscious choices you have made.",
     author: "Barbara Hall"},
    {text:"Nothing is as simple as we hope it will be.",
    author: "Jim Horning"},
    {text: "Fall seven times, stand up eight.",
    author: "Unkonwn author"},
    {text: "There are people who think that everything one does with a serious face is sensible.",
    author: "Georg Christoph Lichtenberg"},
    {text: "I was always taught to respect my elders and I've now reached the age when I don't have anybody to respect.",
    author: "George Burns"},
    {text: "He makes people pleased with him by making them first pleased with themselves.",
    author: "Lord Chesterfield"},
    {text: "I am not young enough to know everything.",
    author: "Oscar Wilde"},
]


btn.addEventListener("click", function() {
    const random = Math.floor(Math.random() * array.length)
    text.textContent = array[random].text
    author.textContent = array[random].author
})