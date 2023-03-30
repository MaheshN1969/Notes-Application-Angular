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

  getNotesAddedSinceYesterday() : Observable<Note[]>
  {
        return this.httpClient.get<Note[]>(`${this.baseUrl}/yesterday`);
  }

  getNoteAddedSinceOneWeek() : Observable<Note[]> 
  {
        // console.log("Notes Since last 1 Week : ",this.httpClient.get<Note[]>(`${this.baseUrl}/week`));
        return this.httpClient.get<Note[]>(`${this.baseUrl}/week`);
  }

  getNotesAddedSinceOneMonth() : Observable<Note[]>
  {
        return this.httpClient.get<Note[]>(`${this.baseUrl}/month`);
  }

  // initialFetch() : Observable<Object>
  // {
  //       return this.httpClient.get<Object>(`${this.baseUrl}`);
  // }

  getSubjectRules() : Observable<SubjectRules[]>
  {
      return this.httpClient.get<SubjectRules[]>(`${this.baseUrl}/rules`)
  }

  addNote(note : Note) : Observable<Object>
  {
      return this.httpClient.post(`${this.baseUrl}`,note);
  }

  deleteNote(id : Number) : Observable<Object> 
  {
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  closeNote(id : Number , note : Note) : Observable<Object>
  {
      return this.httpClient.put(`${this.baseUrl}/close-note/${id}`,note);
  }

  updateNote(id : Number , note : Note) : Observable<Object> 
  {
        return this.httpClient.put(`${this.baseUrl}/update-note/${id}`,note);
  }

}
