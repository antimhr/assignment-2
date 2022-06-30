import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  users(){
    return [
      {name: 'Antim', age: 23, email: 'antim@gmail.com'},
      {name: 'john', age: 24, email: 'john@gmail.com'},
      {name: 'sam', age: 25, email: 'john@gmail.com'},
      {name: 'tom', age: 25, email: 'tom@gmail.com'},
    ]
  }

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

  userDataAPI(){
    return this.http.get(this.url)
  }

  saveUsers(data:any){
    return this.http.post(this.url, data)
  }

}
