import { Component, OnInit } from '@angular/core';
import { CD } from '../model/cd.model';

@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCDsComponent implements OnInit {

  listcd!: CD[];

  ngOnInit(): void {

    this.listcd = [
      {
        id: 0,
        title: 'The Dark Side of the Moon',
        author: 'Pink Floyd',
        price: 10,
        thumbnail: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
        dateDeSortie: new Date(1973, 3 ,1),
        quantite: 1
      },
      {
        id: 1,
        title: 'Pulse',
        author: 'Pink Floyd',
        price: 10,
        thumbnail: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
        dateDeSortie: new Date(1974, 4 ,11),
        quantite: 1
      },
      {
        id: 2,
        title: 'Pulse',
        author: 'Pink Floyd',
        price: 10,
        thumbnail: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
        dateDeSortie: new Date(1984, 6, 20),
        quantite: 1
      },
    ]
  }
}
