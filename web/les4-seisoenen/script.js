const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seisoenen = [
    {
        "title":"seisoenen",
        "image":"img/seasons.jpg",
        "backGround":"gray"
    },
    {
        "title":"lente",
        "image":"img/spring.jpg",
        "backGround":"green"
    },
    {
        "title":"zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
    },
    {
        "title":"herfst",
        "image":"img/autumn.jpg",
        "backGround":"orange"
    },
    {
        "title":"winter",
        "image":"img/winter.jpg",
        "backGround":"white"
    }
];


//let seisoen = {
//    "title":"lente",
//    "image":"img/spring.jpg" 
//};

function show(index){

    myTitle.innerHTML = seisoenen[index].title;
    myImage.src = seisoenen[index].image;
    document.body.style.backgroundColor = seisoenen[index].backGround;
};