import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('contador')
     .subscribe( contador => this.contador = contador );
  }

  multiplicar(){
    const accion: Action = new MultiplicarAction(2);
    this.store.dispatch( accion );   
  }

  dividir(){
    const accion: Action = new DividirAction(2);
    this.store.dispatch( accion );   
  }

  // resetNieto( event ){
  //   this.contador=event;
  //   this.cambioContador.emit(this.contador);
  // }
}
