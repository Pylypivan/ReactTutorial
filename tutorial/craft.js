let names = ['Ivan', 'Ann', 'John', 'Voldematr'];


let rand  = names.filter((name) => {
    return name.length < 5;
});
console.log(rand);


let answers = ['IVan', 'Pylyp', 'JoHn'];

// answers = answers.map((item)=> item.toLowerCase());
// console.log(answers);

answers = answers.map((item) => {
     return item.toLowerCase();
});
console.log(answers);


function dataArt(...numbers) {
    console.log(numbers);
}

dataArt(2,3,4,53,43);



let res1 = [1,22,55,33],
res2 = [444,55,434,454543],
res3 = [3232,54354,4444,34434,545565];

let result = Math.max(...res1,...res2,...res3);
console.log(result);



function button() {
    return 'button';
}

class Slider {
    constructor(width,height,count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
     nextSlide() {
         console.log('next slide');
     }

     prewSlide() {
         console.log('prew slide');
     }
       
     whoAmi() {
         console.log(this.width,this.height,this.count);
     }
}


// const slider = new Slider(600,400,7),
// someSlider = new Slider(500,300,3);
// someSlider.whoAmi();
// slider.whoAmi();


class AutoSlider extends Slider {
    constructor(width, height, count, auto) {
        super(width, height, count);
         this.auto = auto;
    }

    play() {
        console.log(`Example: ${this.auto}`);
    }
    
}

const autoRandom = new AutoSlider(500,800,4,true);
autoRandom.whoAmi();
autoRandom.play();