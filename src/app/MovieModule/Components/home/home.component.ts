import { Component,OnInit } from '@angular/core';
import { MovieService } from '../../Service/movie.service';
import { MasterService } from 'src/app/Service/master.service';
import { Movie } from '../../Model/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allMovies: Movie[]=[] ;
  oneMovie: any= {} ;
  constructor(private movies:MovieService,   
      private master: MasterService,
    ){}
  
  getAllMovies(){
    this.movies.getAllMovies().subscribe((res)=>{
      this.allMovies = res
    })
  }

  ngOnInit(): void {
    this.getAllMovies();
  }

 
}
