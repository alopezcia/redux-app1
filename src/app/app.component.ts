import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';


interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor( private store: Store<AppState> ){
    // this.contador = 10;
    this.store.subscribe( state => {
      this.contador = state.contador;
//      console.log(state);
    });
  }

  incrementar(){
    // this.contador++;
    const accion: Action = new IncrementarAction();
    this.store.dispatch( accion );
  }

  decrementar(){
    // this.contador--;
    const accion: Action = new DecrementarAction();
    this.store.dispatch( accion );
  }
}
