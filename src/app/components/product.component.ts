import {Component} from '@angular/core'
@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})

export class  ProductComponent{

product={
  id : '1',
  title:'Camiseta',
  price:8000,
  description: 'bla bla'
}


}
