import {Restaurant} from "./restaurant.model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MEAT_API} from "../../app.api";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {ErrorHandler} from "../../app.error-handler";

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) {
  }

  restaurants() : Observable<Array<Restaurant>>{
      return this.http.get<Array<Restaurant>>(`${MEAT_API}/restaurants`)
        .pipe(
          catchError(ErrorHandler.handleError)
        )
  }

  restaurant(id: string) : Observable<Restaurant> {
      return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
        .pipe(
            catchError(ErrorHandler.handleError)
        )
  }


}
