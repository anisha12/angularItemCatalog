import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipePipe implements PipeTransform {

  transform(array:Array<string>, capacity: string): Array<string> {
    array.sort((a:any,b:any)=>{
      if (a[capacity] <b[capacity]){
          return -1;
      }else if(b[capacity]>b[capacity]){
          return 1;
      } else{
        return 0;
      }
    });
    return array;

    }
  }

