import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect

  public name: string = 'Argueta';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name='María';
    this.gender='female';
  }

  // i18nPlural

  public clients:string[]=['María','Pedro','Argueta','Eduardo','José','Juan','David'];
  public clientsMap={
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe

  public person = {
    name:'Jesús',
    age:'25',
    address: 'Sevilla, España'
  }

  //Asunc Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue:Promise<string> =new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
    }, 3500);
  })

}
