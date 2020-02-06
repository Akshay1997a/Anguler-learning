import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Anguler7-app';
  food = null
  qty= null

  obj = [
    {food: 'Apple', qty: '4'},
  ]

  isNotEmpty = this.obj.length == 0 ? false : true

  inputHandler(name, value){
    alert(name+' '+value)
  }

  addItem(food, qty){
    if(food && qty){
      this.obj.push({food: food, qty: qty})
    }else{
      alert('Enter input first')
    }
  }
}
