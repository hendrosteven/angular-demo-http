import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService{

    url: string = 'https://reqres.in/api/users?page=2';

    constructor(private http: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


    findAll(): Observable<any>{
        return this.http.get(this.url, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandle)
            );
    }


    errorHandle(err: any) {
       let errorMessage = '';
       if(err.error instanceof ErrorEvent){
           errorMessage = err.error.message;
       }else {
           errorMessage = `Error Code: ${err.status} \n Message: ${err.message}`;
       }
       console.log(errorMessage);
       return throwError(errorMessage);
    }

}