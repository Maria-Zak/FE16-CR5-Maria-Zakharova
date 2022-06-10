class Animal{
    name: string;
    gender: string;
    size: string;
    age: number;
    vaccine: boolean;
    image: string;
    constructor(name:string, gender:string, size:string, age:number, vaccine:boolean, image:string){
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        this.image=image;
        array.push(this)
    }
   
    display(){
        let color: string = "";
        if (this.vaccine == true) {
            color = "success";
        } else {
            color = "danger";}
        return `<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 gap-2"><div class="card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top d-none d-md-block" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}</p>
          <p class="card-text">Age: ${this.age} years</p>
          <p class="card-text">Size: ${this.size}</p>
          <a href="#" class="btn btn-${color} vacBtn">Vaccine</a>
        </div>
      </div>
      </div>`

    }
}

class Cat extends Animal{
    breed: string;
    color: string;
    breedURL: string;
    constructor(name:string, gender:string, size:string, age:number, vaccine:boolean, image:string,breed: string, color: string, breedURL: string){
    super(name,gender,size,age,vaccine,image);
    this.breed=breed;
    this.color=color;
    this.breedURL=breedURL;
    }
    display(){
        let color: string = "";
        if (this.vaccine == true) {
            color = "success";
        } else {
            color = "danger";}
        return `<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 gap-2"><div class="card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top d-none d-md-block" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}</p>
          <p class="card-text">Age: ${this.age} years</p>
          <p class="card-text">Size: ${this.size}</p>
          <a href="#" class="btn btn-${color} vacBtn">Vaccine</a>
          <hr>
          <p class="card-text">Breed: ${this.breed}</p>
          <p class="card-text">Color: ${this.color}</p>
          <p class="card-text mb-0"><a href="${this.breedURL}"</a>About Breed</p>
        </div>
        </div>
      </div>`
    }
}
class Dog extends Animal{
    breedDog: string;
    training: string;
    constructor(name:string, gender:string, size:string, age:number, vaccine:boolean, image:string, breedDog: string, training: string){
        super(name,gender,size,age,vaccine,image);
        this.breedDog=breedDog;
        this.training=training;
        }
        display(){
            let color: string = "";
            if (this.vaccine == true) {
                color = "success";
            } else {
                color = "danger";}
            return `<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 gap-2"><div class="card" style="width: 18rem;">
            <img src="${this.image}" class="card-img-top d-none d-md-block" alt="...">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <p class="card-text">Gender: ${this.gender}</p>
              <p class="card-text">Age: ${this.age} years</p>
              <p class="card-text">Size: ${this.size}</p>
              <a href="#" class="btn btn-${color} vacBtn">Vaccine</a>
              <hr>
              <p class="card-text">Breed: ${this.breedDog}</p>
              <p class="card-text mb-0">Training: ${this.training}</p>
            </div>
            </div>
          </div>`
        }

}
let array: Array<Animal>=[]
new Animal('Sirena','female','small',2, false, 'https://cdn.pixabay.com/photo/2014/09/10/17/44/rat-440987_1280.jpg');
new Animal('Temp','male','big',10, true, 'https://cdn.pixabay.com/photo/2018/05/11/11/11/horse-3390256_1280.jpg');
new Cat('Bambi','male','small',4, true, 'https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg','Siamese',"Seal Point",'https://en.wikipedia.org/wiki/Siamese_cat');
new Cat('Joy','female','medium',3, true, 'https://cdn.pixabay.com/photo/2022/04/21/15/20/animal-7147727_1280.jpg','Neva Masquerade',"Blue-Tabby-Point",'https://de.wikipedia.org/wiki/Neva_Masquarade');
new Dog('Bueno','male','big',8, true, 'https://cdn.pixabay.com/photo/2019/12/28/00/31/dog-4723680_1280.jpg','Hasky','yes');
new Dog('Nina','female','medium',12, true, 'https://cdn.pixabay.com/photo/2021/07/05/14/07/dog-6389277_1280.jpg','Corgi','yes');


const contentDiv=(document.getElementById('content') as HTMLElement)
function updateHtml(){
    contentDiv.innerHTML = "";
for( let val of array){
   contentDiv.innerHTML += val.display();
    }
    const vacBtns = document.getElementsByClassName("vacBtn") as HTMLCollection;
    for(let i: number = 0; i < vacBtns.length; i++){
        // console.log(vacBtns[i]);
        vacBtns[i].addEventListener("click", () => setVac(i));
}

};
function setVac(e: any): void{
    // console.log(e);
    array[e].vaccine = !array[e].vaccine;
    updateHtml();
}

let sort = document.getElementById("sort") as HTMLElement;
sort.addEventListener("click", sortAll)

function sortAll() {
    array.sort((a, b) => b.age - a.age);
    updateHtml()
}
updateHtml();
