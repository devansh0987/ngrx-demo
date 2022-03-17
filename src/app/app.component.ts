import { Component } from '@angular/core';
import { NgRedux ,select } from '@angular-redux/store';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  @select('counter') count : any;

  constructor(private ngRedux : NgRedux<IAppState>){
  //  ngRedux.subscribe(() => {
  //   var store =  ngRedux.getState()
  //   this.counter = store.counter
  //  })
  }

  increment(){
    // this.counter++;
    this.ngRedux.dispatch({ type : 'INCREMENT' })
  }
}
