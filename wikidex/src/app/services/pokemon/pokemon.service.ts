import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../common/common.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
    private common: CommonService
  ) { }

  getPokemonByName(name: string): Observable<any> {
    return this.http
      .get<any>(`${this.common.pokeapiBaseUrl}v2/pokemon/${name}?offset=20&limit=20`)
      .pipe(catchError(this.common.handleError));
  }
}
