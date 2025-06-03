import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-page',
  imports: [MatCardModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {
  image = 'assets/images/back.jpg'

  ngOnInit(): void { }

}
