import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items = [
    { title: 'Why sky is blue?', content: 'Sky is blue because it is'},
    { title: 'What does an orange taste like?' ,content: 'An orange tastes like orange'},
    { title: 'What color is that cat?', content: 'The cat is orange'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  clickOpen() {
    this.modalOpen = !this.modalOpen;
  }

}
