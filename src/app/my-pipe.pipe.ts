import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true,
})
export class MyPipePipe implements PipeTransform {
  transform(value: string): string {
    const result = value.slice(0, value.length / 2).toUpperCase();

    return result || '';
  }
}
