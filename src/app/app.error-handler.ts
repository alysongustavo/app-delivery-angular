import {Observable, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

export class ErrorHandler {

    static handleError(error: HttpErrorResponse){
      let errorMessage: string;
      if(error.error instanceof ErrorEvent)
      {
        errorMessage = `An error occurred: ${error.message}`
      }else{
        errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
      }

      console.log(errorMessage)
      return throwError(errorMessage)
    }
}
