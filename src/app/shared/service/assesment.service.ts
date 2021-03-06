import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { timer, of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';


/**
 * Provides service for accessing REST API service.
 */
@Injectable({
  providedIn: 'root'
})

export class AssesmentService {
  private getAssesmentAPIURL = environment.assessment_api_url;

  /**
   * Constructor to allow the injection of required services.
   * @param http HttpClient instance for accessing the Rest API.
   */
  constructor(private http: HttpClient) { }
  // Variable to return response for defined test criterias
  respseReturn: string;

  private modals: any[] = [];

  getAssesmentData(): Observable<any> {
    return this.http.get<any>(this.getAssesmentAPIURL);
  }

}