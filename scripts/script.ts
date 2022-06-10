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
        let sign: string="";
        if (this.vaccine == true) {
            color = "success";
            sign = "<i class='fa fa-check-circle'></i>"
        } else {
            color = "danger";
            sign = "<i class= 'fa fa-close'></i>"}
        return `<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 gap-2"><div class="card">
        <img src="${this.image}" class="card-img-top d-none d-md-block" alt="...">
        <div class="card-body">
        <h5 class="card-title bg-black text-white text-center">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}</p>
          <p class="card-text">Age: ${this.age} years</p>
          <p class="card-text">Size: ${this.size}</p>
          <button class="btn btn-${color} vacBtn">Vaccine ${sign}</button>
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
        let sign: string="";
        if (this.vaccine == true) {
            color = "success";
            sign = "<i class='fa fa-check-circle'></i>"
        } else {
            color = "danger";
            sign = "<i class= 'fa fa-close'></i>"}
        return `<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 gap-2"><div class="card">
        <img src="${this.image}" class="card-img-top d-none d-md-block" alt="...">
        <div class="card-body">
          <h5 class="card-title bg-black text-white text-center">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}</p>
          <p class="card-text">Age: ${this.age} years</p>
          <p class="card-text">Size: ${this.size}</p>
          <button class="btn btn-${color} vacBtn">Vaccine ${sign}</button>
          <hr>
          <p class="card-text">Breed: ${this.breed}</p>
          <p class="card-text">Color: ${this.color}</p>
          <p class="card-text mb-0"><a class="text-black text-decoration-none" href="${this.breedURL}"</a>About Breed</p>
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
            let sign: string="";
            if (this.vaccine == true) {
                color = "success";
                sign = "<i class='fa fa-check-circle'></i>"
            } else {
                color = "danger";
                sign = "<i class= 'fa fa-close'></i>"}
            return `<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 gap-2"><div class="card">
            <img src="${this.image}" class="card-img-top d-none d-md-block" alt="...">
            <div class="card-body">
            <h5 class="card-title bg-black text-white text-center">${this.name}</h5>
              <p class="card-text">Gender: ${this.gender}</p>
              <p class="card-text">Age: ${this.age} years</p>
              <p class="card-text">Size: ${this.size}</p>
              <button class="btn btn-${color} vacBtn">Vaccine ${sign}</button>
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
new Animal('Dean','male','small',1, false, 'https://cdn.pixabay.com/photo/2014/06/21/08/43/rabbit-373691_1280.jpg');
new Cat('Bambi','male','small',4, true, 'https://cdn.pixabay.com/photo/2017/03/08/08/52/cat-2126225_1280.jpg','Siamese',"Seal Point",'https://en.wikipedia.org/wiki/Siamese_cat');
new Cat('Joy','female','medium',3, true, 'https://cdn.pixabay.com/photo/2022/06/03/11/23/cat-7239957_1280.jpg','Neva Masquerade',"Blue-Tabby-Point",'https://de.wikipedia.org/wiki/Neva_Masquarade');
new Cat('Nemi','female','medium',5, true, 'https://cdn.pixabay.com/photo/2015/03/27/13/10/cat-694718_1280.jpg','Maine Coon',"orange",'https://en.wikipedia.org/wiki/Maine_Coon');
new Dog('Bueno','male','big',8, true, 'https://cdn.pixabay.com/photo/2019/12/28/00/31/dog-4723680_1280.jpg','Hasky','yes');
new Dog('Nina','female','medium',12, true, 'https://cdn.pixabay.com/photo/2021/07/05/14/07/dog-6389277_1280.jpg','Corgi','yes');
new Dog('Spock','male','small',6, true, 'https://cdn.pixabay.com/photo/2022/05/18/14/50/dog-7205472_1280.jpg','Yorkshire terrier','no');


const contentDiv=(document.getElementById('content') as HTMLElement)
function updateHtml(){
    contentDiv.innerHTML = "";
for( let val of array){
   contentDiv.innerHTML += val.display();
    }
    const vacBtns = document.getElementsByClassName("vacBtn") as HTMLCollection;
    for(let i: number = 0; i < vacBtns.length; i++){
    vacBtns[i].addEventListener("click", () => vacColor(i));
}
};
function vacColor(i:any) {
    array[i].vaccine = !array[i].vaccine;
    updateHtml();
}

let sort = document.getElementById("sort") as HTMLElement;
sort.addEventListener("click", sortAll);



function sortAll() {
    array.sort((a, b) => a.age - b.age);
    updateHtml()
}

updateHtml();
