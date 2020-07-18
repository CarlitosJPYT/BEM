const Youtubers = [
     {Author : "German", Song : "Singing Comments", Views : 255},
     {Author : "Julio", Song : "Roast Yourself", Views : 336},
     {Author : "Dalas", Song : "Roast Yourself", Views : 312},
     {Author : "Franda", Song : "When I go to the bathroom", Views : 343}
]

const music = Youtubers.find(item => {
     return item.Author === 'German'
})
prompt(music)

const IVA = Youtubers.map(item => {
     item.Views *= 1.2
     return item
})
if (true) {
     console.log(Youtubers)
}
const sound = Youtubers.filter(item => {
     return item.Song === 'Roast Yourself'
})
setTimeout(() => {
     alert(sound)
}, 5000);