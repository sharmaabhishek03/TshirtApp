import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MasterDetails';
  imageWidth=175;
  imageHeight=225;
  products: any=[];
  showDetails=false;
  buyButton=false;
  imgSrc="";
  tshirtdetails:any;

  addtocart(p){
    this.tshirtdetails=p;
    this.showDetails=true;
    this.buyButton=true;
    
  }
  cancel(d){
    this.showDetails=false;
    this.buyButton=false;
  }
  update(d):void{
    this.showDetails=false;
    this.buyButton=false;
  }
  ngOnInit(){
    this.products=this.getTshirts();
   
}
mouseEnter(div : string){
  console.log(div);

}

mouseLeave(div : string){
  console.log(div);
}
change(div:string){
  
}
  getTshirts() {
    return [
      {
        "tshirtId": 1,
        "tshirtPrice": 500,
        "name":"Roadster",
        "description":"Men Navy Printed Round Neck T-shirt ",
        "frontImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T1Front.jpg?raw=true",
        "backImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T1Back.jpg?raw=true",
        "inStock": 30,
        "tshirtColor": "red",
        "productCode":"PROD-113",
        "releaseDate":"22/02/2018",
        "tShirtRating": 3.2,
        "imgSrc":"",
      },
      {
        "tshirtId": 2,
        "tshirtPrice": 600,
        "name":"HERE&NOW",
        "description":"Men Black Printed Round Neck T-shirt ",
        "frontImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T2Front.jpg?raw=true",
        "backImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T2Back.jpg?raw=true",
        "inStock": 27,
        "tshirtColor": "blue",
        "productCode":"PROD-223",
        "releaseDate":"10/08/2017",
        "tShirtRating": 4.3,
        "imgSrc":"",
      }, 
      {
        "tshirtId": 3,
        "tshirtPrice": 800,
        "name":"HERE&NOW",
        "description":"Men White & Black Colourblocked Hooded T-shirt",
        "frontImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T3Front.jpg?raw=true",
        "backImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T3Back.jpg?raw=true",
        "inStock": 40,
        "tshirtColor": "black",
        "productCode":"PROD-1232",
        "releaseDate":"12/12/2019",
        "tShirtRating": 2, "imgSrc":"",
      }, 
      {
        "tshirtId": 4,
        "tshirtPrice": 700,
        "name":"Nike",
        "description":"Men Teal Blue Solid Polo T-shirt ",
        "frontImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T4Front.jpg?raw=true",
        "backImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T4Back.jpg?raw=true",
        "inStock": 20,
        "productCode":"PROD-456",
        "releaseDate":"11/10/2019",
        "tshirtColor": "violet",
        "tShirtRating": 2.2, "imgSrc":"",
      } ,
      {
        "tshirtId": 5,
        "tshirtPrice": 400,
        "name":"Calvin Klein",
        "description":"Men White Printed Round Neck T-shirt",
        "frontImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T5Front.jpg?raw=true",
        "backImageUrl": "https://github.com/sharmaabhishek03/TshirtApp/blob/master/src/assets/images/T5Back.jpg?raw=true",
        "inStock":26,
        "productCode":"PROD-12",
        "releaseDate":"12/08/2019",
        "tshirtColor": "brown",
        "tShirtRating": 5, "imgSrc":"",
      }
    
    ]
  }
}

