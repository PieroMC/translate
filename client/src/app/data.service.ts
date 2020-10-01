import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Word } from "./Word";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { 
    console.log('Service is Working');
  }

  getData(){
    return this.httpClient.get<Word[]>('http://localhost:5000/api/translate')
  }
}
