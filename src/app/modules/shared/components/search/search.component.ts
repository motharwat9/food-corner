import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTrem:string='';
  constructor(private activatedRoute:ActivatedRoute , private router:Router){
    this.activatedRoute.params.subscribe(params=>{
      if(params['searchTerm']){
        this.searchTrem=params['searchTerm']
      }
    })
  }
  ngOnInit(): void {
  }
  search(){
    if(this.searchTrem)
      this.router.navigate([`/search/${this.searchTrem}`])
    else {
      this.router.navigate(['/foods'])
    }
  }
}
