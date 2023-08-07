import { Component, OnInit } from '@angular/core';
import { ConversationsComponent } from './conversations/conversations.component';
import { HeaderComponent } from './sidenav/header/header.component';
import { ChatsComponent } from './sidenav/search/chats/chats.component';
import { SearchComponent } from './sidenav/search/search.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [SidenavComponent, ConversationsComponent],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
