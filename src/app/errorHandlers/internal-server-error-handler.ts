import {HttpResponseErrorHandler} from "./http-response-error-handler";
import {HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CustomSnackbarService} from "../services/custom-snackbar.service";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class InternalServerErrorHandler implements HttpResponseErrorHandler{

  constructor(
    private customSnackbarService: CustomSnackbarService,
    private translateService: TranslateService
  ) {}

  handle(error: HttpErrorResponse): any {
    this.translateService.get(['error.400.title', 'error.400.message']).subscribe(translations => {
      this.customSnackbarService.error(translations.get('error.400.title'), translations.get('error.400.message'), 5000);
    })
  }

  matches(error: HttpErrorResponse): boolean {
    return error.status === 400;
  }
}
