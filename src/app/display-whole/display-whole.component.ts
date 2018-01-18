import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/Item.model';
import { DataService } from '../shared/data.service';
import 'rxjs/Rx'
import { Subject } from 'rxjs/Subject';





@Component({
  selector: 'app-display-whole',
  templateUrl: './display-whole.component.html',
  styleUrls: ['./display-whole.component.css'],
})

export class DisplayWholeComponent implements OnInit {
  items = [];

  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private dataService: DataService) {
    this.dataService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      }); }

  ngOnInit() {
    // this.items = this.dataService.getData();
    this.dataService.getData()
      .subscribe(
      (items:any[]) => {
     this.items = items ;
        console.log(this.items);
      },
      (error) => console.log(error)
      );

//sort logic

      this.items.sort(function(item1,item2){
          if(item1.capacity<item2.capacity){
            return -1;

          }else if( item1.capacity>item2.capacity){
              return 1;
          }else{
            return 0;
          }
      });
  }
    onSort(){
      this.items.sort(function(item1,item2){
          if(item1.capacity<item2.capacity){
            return -1;

          }else if( item1.capacity>item2.capacity){
              return 1;
          }else{
            return 0;
          }
      });
        return this.items;
    }
      
  

}
