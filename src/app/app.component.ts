import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Component1Component } from './component1/component1.component';
import { MyDataService } from './services/my-data.service';
import { HttpService } from './services/http.service';
import { User } from './models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('someInput') someInput: ElementRef;

  dataInfo: any;

  title = 'app azert';

  // display date
  dateToday = Date();

  // Init cmpt via parent
  parentProp = 2;

  // Recuperer attribut du fils
  @ViewChild(Component1Component) child: Component1Component;

  //=====
  //
  formId = new FormControl('');
  formName:string;
  //
  //=====

  //=====
  // get observable
  listUser:User[];
  // get observable
  //=====

  constructor(private data: MyDataService,
    private httpService: HttpService) {

      console.log('<<<< getUsers');
      this.httpService.getUsers().subscribe( data => {
        console.log('list data',data);        
        this.listUser = data;
      });
      console.log('<<<< getUsers');

  }

  clearParentEvent(cmpt: number) {
    console.log('>>>> parent ' + cmpt);
  }

  searchId(){
    console.log(this.formId.value);
    this.formName = this.data.searchId(this.formId.value);
    console.log(this.data.searchId(this.formId.value));
  }
}
