import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments-tab',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent {
  @Input()
  public currentUser: any;
}