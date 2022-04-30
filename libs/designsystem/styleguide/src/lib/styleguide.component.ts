import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from "@angular/router";

@Component({
  selector: 'bb-styleguide',
  templateUrl: './styleguide.component.html',
  styles: [],
})
export class StyleguideComponent implements OnInit {
  routes: Array<string> = this.activatedRoute.routeConfig?.children
    ?.slice(1, -1)
    .map((route: Route) => route.path)
    .sort() as Array<string>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
