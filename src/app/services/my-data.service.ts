import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  private _tabData: any = [{ 'id': 5, 'name': 't5t5' },
  { 'id': 2, 'name': 't4t4' },
  { 'id': 1, 'name': 't1t1' },
  { 'id': 3, 'name': 't3t3' }
  ];

  constructor() { }

  searchId(id: number) {
    let ok = false;
    
    this._tabData.forEach(function (element) {
      if (element.id === +id) {
        console.log('>> searchId  '+element.name);
        ok = true;
        return element.name;
      }
    });
    if (!ok) {
      return 'inconnu';
    }
  }

}
