import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";

export class BaseService<T> {
  basePath: string = `${ environment.serverBasePath}`;
  resourceEndpoint: string = `/resources`;
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    })
  }

  constructor(public http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      //Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${ error.status },
                  body was ${error.error}`);
    }
    return throwError(()=>
      new Error('Something happened with request, please try again later'));
  }

  private resourcePath() {
    return `${ this.basePath}${this.resourceEndpoint}`;
  }

  //Create Resource
  create(item: any){
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Delete Resource
  delete(id: any){
    return this.http.delete(`${ this.resourcePath() }/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Update Resource
  update(id: any, item: any){
    return this.http.put<T>(`${ this.resourcePath() }/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Get
  getAll(){
    return this.http.get<T>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}











