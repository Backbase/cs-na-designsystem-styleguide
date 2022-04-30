import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, oldStr: string, newStr?: string): string {
    if (!value || !oldStr) return value;
    return value.replace(oldStr, newStr || '');
  }
}
