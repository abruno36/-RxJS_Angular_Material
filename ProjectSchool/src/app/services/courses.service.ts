import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Course } from '@app/shared/models/course';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseURL = `${environment.apiURL}courses`;
  private http: HttpClient;

  constructor(private injector: Injector) {
    this.http = this.injector.get(HttpClient);
  }

  public get(
    currentPage: number,
    pageSize: number,
    category: string,
    search: string
  ): Observable<HttpResponse<any>> {
    let url = `${this.baseURL}?_page=${currentPage}&_limit=${pageSize}`;
    if (category) {
      url = `${url}&category=${category}`;
    }
    if (search) {
      url = `${url}&q=${search}`;
    }
    return this.http.get<Course[]>(url, { observe: 'response' });
  }

  public getById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}/${id}`);
  }

  public post(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(this.baseURL, course);
  }

  public put(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseURL}/${id}`, course);
  }

  public delete(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`);
  }
}
