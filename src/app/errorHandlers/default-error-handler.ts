import {HttpResponseErrorHandler} from "./http-response-error-handler";
import {InternalServerErrorHandler} from "./internal-server-error-handler";
import {HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class DefaultErrorHandler implements HttpResponseErrorHandler{
  private readonly handlers: HttpResponseErrorHandler[];

  constructor(
    private internalServerErrorHandler: InternalServerErrorHandler,
  ){
    this.handlers = [
      internalServerErrorHandler,
    ];
  }

  handle(error: HttpErrorResponse){
    for(const handler of this.handlers){
      if(handler.matches(error)){
        handler.handle(error);
      }
    }
  }

  matches(error: HttpErrorResponse): boolean {
    return true;
  }
}
