import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note';
import { SubjectRules } from './subject-rules';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl = "http://localhost:8081/api/v1/notes";

  constructor(private httpClient : HttpClient ) { }

  getNoteList() : Observable<Note[]>
  {
      return this.httpClient.get<Note[]>(`${this.baseUrl}`);
  }

  // initialFetch() : Observable<Object>
  // {
  //       return this.httpClient.get<Object>(`${this.baseUrl}`);
  // }

  getSubjectRules() : Observable<SubjectRules[]>
  {
      return this.httpClient.get<SubjectRules[]>(`${this.baseUrl}/rules`)
  }

}
