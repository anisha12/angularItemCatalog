import { Injectable } from '@angular/core';
import { Http  ,Response} from "@angular/http";
import { Item } from "./Item.model";

import { Observable  } from "rxjs/Observable";
import 'rxjs/Rx'

@Injectable()
export class DataService {
  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';
  constructor(private http:Http) { }

   getData(){
      //  // return this.http.get('https://glacial-lake-74502.herokuapp.com/products/getProducts')
      //  //return this.http.get('https://calm-journey-79376.herokuapp.com/products/getProducts')
      //  return this.http.get("https://udemy-http-902f8.firebaseio.com/0.json");
      //  //   return this.http.get('itemDetails.json')           
      //               //  .map(
      //               //    (response:Response)=>{
      //               //     const data = response.json();
      //               //  });
      //     } 

      return this.http.get('https://udemy-http-902f8.firebaseio.com/data/-L38bKLNaPeul7b3OI2w.json')
            .map(
                (response:Response) =>{
                    const data = response.json();
                   
                    console.log(data);
                    return data;
                }
            )
            .catch(
                (error:Response)=>{
                console.log(error);
                return Observable.throw( 'Something went wrong '+error);
            });

   }
          search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl +this.queryUrl +term)
        .map(res => res.json());
  }
}
