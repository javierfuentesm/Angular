import {Component} from '@angular/core'
import { Product} from '../product.model'
@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})

export class  ProductComponent{

product :Product={
  id : '1',
  title:'Camiseta',
  price:8000,
  description: 'bla bla'
};


}
