import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    // this.posts = this.postService.getPost();
    this.postService.getPost().subscribe((res) => {
      this.posts = res;
      console.log(res);
    },
    (er)=>{
      console.log(er);
    })
  }

}
