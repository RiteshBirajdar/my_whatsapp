import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports:[HeaderComponent,SearchComponent,ChatsComponent],
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}