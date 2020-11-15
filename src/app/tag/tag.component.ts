import { Component, OnInit } from '@angular/core';
import { Tag } from '../tag';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
	tags_array: Tag[];

  constructor() { }

  ngOnInit(): void {
    this.getTags;
  }

  getTags(): void{
	  this.TagService.getTags()
	  .subscribe (tags => {
		  console.log(tags.length);
		  this.tags = tags })
    }


}
