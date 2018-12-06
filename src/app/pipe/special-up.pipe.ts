import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialUp'
})
export class SpecialUpPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.length < 2 ) {
      return '';
    }
    value = value.toLowerCase();
    console.log(value);
    value = value.charAt(1).toUpperCase() + value.slice(2);
    console.log(value);
    value = value.slice(0, value.length-2) + value.charAt(value.length-2).toUpperCase() ;
    console.log(value);
    return value;
  }

}
