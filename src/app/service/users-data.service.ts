import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  url = "https://jsonplaceholder.typicode.com/users"

  constructor(
    private http: HttpClient
  ) { }

  users(){
    return this.http.get(this.url);
  }

  userData(id:any){
    let urlID = `https://jsonplaceholder.typicode.com/users/${id}`
    return this.http.get(urlID)
  }
}
