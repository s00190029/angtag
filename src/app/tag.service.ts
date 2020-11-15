import { Injectable } from '@angular/core';
import { Tag } from './model/tag';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class TagService {
	private dataUri = 'http://localhost:3000/tags'

  constructor(private http: HttpClient) { }
  tags : Tag[] = 
  [
    {title: "FPS", description: "First Person Shooter"},
    {title: "Horror", description: "Of genre Horror"},
  ];

  getTags() : Observable <Tag[]> {
    console.log('get tags called')
    return this.http.get<Tag[]>(`${this.dataUri}?limit=5`)
      .pipe(
	catchError(this.handleError)
      )
 }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
