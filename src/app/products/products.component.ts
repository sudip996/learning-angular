import { Component, OnInit } from '@angular/core';
import { products } from '../model/productModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsObj:products = new products();
  public productArray:Array<products> = new Array<products>();
  public viewPerson:products = new products()
  public editPerson:products = new products()
  public updatePerson:products =new products()
  public deletePerson:products =new products()
  public addProducts:products =new products()
  private index:number=0
  pageTitle:string = 'products';

  ProductList:Array<products> = [
      {sn:1,ProductName:'noodles',AvailableQty:200,UnitPrice:210},
      {sn:2,ProductName:'biscuits',AvailableQty:190,UnitPrice:200},
      {sn:3,ProductName:'chocolates',AvailableQty:180,UnitPrice:195},
      {sn:4,ProductName:'surya',AvailableQty:205,UnitPrice:300}
    ]

    public showEditModal :boolean = false;
    public showView :boolean = false;
  constructor() { }

  ngOnInit(): void {
}
onSubmit(){
  
  this.productArray.push(this.productsObj);
  this.productsObj = new products();
  
  }
view(event:any)
{
  this.showView = true;
    this.viewPerson = event;
}
edit(event:any)
{
  this.showEditModal = true;
  console.log(event)
  this.editPerson = event.row
  this.index = event.i
  this.productsObj=event.row;
}
delete(event:any){
  const index = this.productArray.findIndex(data=>{
   return data.sn === event.sn})
   this.productArray.splice(index,1)

  }
 
  update(event:any){
    console.log(event)
    this.productArray[this.index].ProductName = event.Name
    this.productArray[this.index].AvailableQty = event.Qty
    this.productArray[this.index].UnitPrice = event.price
    
     //  data = {name:`event.address${i}`}
    }

    public showAdd:boolean = false;
    Add(){
      this.showAdd = true;
         }
    
    Save(){
      let maxSN=this.ProductList[0].sn;
      for(let i=1; i< this.ProductList.length; i++)
        {
          if(this.ProductList[i].sn>maxSN)
          {
            maxSN=this.ProductList[i].sn;
          }
        }
        let newSN=maxSN+1;
        this.addProducts.sn=newSN;
        console.log(this.addProducts);
        this.ProductList.push(this.addProducts);

        this.addProducts =  new products();
        
    }
    
}

