import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

 transform(searchPipe: any, searchText: any): any {
    if(searchText == null) return searchPipe;

    return searchPipe.filter(function(itemName){
      return itemName.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
