import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value)
      return '';
    let stringPhone = "0" + value.toString();
    return stringPhone.slice(0, 3) + "-" + stringPhone.slice(3);;
  }

}
