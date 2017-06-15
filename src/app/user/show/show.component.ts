import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {

  params: Observable<any>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.params = this.route.params;
  }

}
