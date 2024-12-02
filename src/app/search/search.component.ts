import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input()
  searchRoute = '/search/';

  @Input()
  defaultRoute = '/';

  @Input()
  placeholder = 'Search Food';

  searchTerm = '';

  constructor(private ms:MenuService, activatedRoute: ActivatedRoute, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm'])
      {
        this.searchTerm = params['searchTerm'];
      }
    })
  }

  search(term: string): void {
    if(term)
    {
      console.log( this.searchRoute+term);
      // this.router.navigateByUrl('/search/' + term);
      this.router.navigateByUrl(this.searchRoute + term);
      
    }
    else
    {
      console.log(this.defaultRoute);
      // this.router.navigateByUrl('/');
      this.router.navigateByUrl(this.defaultRoute);
    }
  }
}
