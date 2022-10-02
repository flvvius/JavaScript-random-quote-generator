const btn = document.querySelector("button")
const text = document.querySelector(".text")
const author = document.querySelector(".author")

const array = [
    {
        text: "Because you are in control of your life. Don't ever forget that. You are what you are because of the conscious and subconscious choices you have made.",
        author: "Barbara Hall"
    },
    {
        text:"Nothing is as simple as we hope it will be.",
        author: "Jim Horning"
    },
    {
        text: "Fall seven times, stand up eight.",
        author: "Unkonwn author"
    },
    {
        text: "There are people who think that everything one does with a serious face is sensible.",
        author: "Georg Christoph Lichtenberg"
    },
    {
        text: "I was always taught to respect my elders and I've now reached the age when I don't have anybody to respect.",
        author: "George Burns"
    },
    {
        text: "He makes people pleased with him by making them first pleased with themselves.",
        author: "Lord Chesterfield"
    },
    {
        text: "I am not young enough to know everything.",
        author: "Oscar Wilde"
    },
    {
        text: "e greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "Steve Jobs"
    }
]


btn.addEventListener("click", function() {
    const random = Math.floor(Math.random() * array.length)
    text.textContent = array[random].text
    author.textContent = array[random].author
})