import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasterService } from 'src/app/Service/master.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  base: string = 'Movies';

  type: string = 'Types';

  director: string = 'Directors';

  movieType: string = 'MovieTypes';

  url: string = '';


  movieDetails: string = 'Details';

  movieUpdate: string = 'Update';

  constructor(
    private master: MasterService,
    private http: HttpClient
  ) { this.url = environment.UrlBase;
  }

  getAllTypes() {
    return this.master.getAll(this.type);
  }

  getAllDirectors() {
    return this.master.getAll(this.director);
  }

  getAllMovieTypes() {
    return this.master.getAll(this.movieType);
  }

  getAllMovies() {
    return this.master.getAll(this.base);
  }

  getMovieDetails(id: any) {
    return this.master.getById(this.base, this.movieDetails, id);
  }

  addMovie(data: any) {
    return this.master.Add(this.base, data);
  }

  updateMovie(id: any, data: any) {
    return this.master.Update(this.base, this.movieUpdate, id, data);
  }

  deleteMovie(id: any) {
    return this.master.Delete(this.base, id);
  }

}
