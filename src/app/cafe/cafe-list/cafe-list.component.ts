import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  totalOrigen: number = 0;
  totalBlend: number = 0;
  tiposCafes: Array<string> = [];

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      for(let cafe of this.cafes){
        if(!this.tiposCafes.includes(cafe.tipo)){
          this.tiposCafes.push(cafe.tipo);
        }
      }
    });
  }

  
  /*
  getTotalOrigen(): number {
    this.totalOrigen = 0;
    for (let cafe of this.cafes) {
      if (cafe.tipo == "Café de Origen") {
        this.totalOrigen += 1;
      }
    }
    return this.totalOrigen;
  }

  getTotalBlend(): number {
    this.totalBlend = 0;
    for (let cafe of this.cafes) {
      if (cafe.tipo == "Blend") {
        this.totalBlend += 1;
      }
    }
    return this.totalBlend;
  }*/

  getTotalByTipo(tipo: string): number {
    let total: number = 0;
    for (let cafe of this.cafes) {
      if (cafe.tipo == tipo) {
        total += 1;
      }
    }
    return total;
  }

  ngOnInit() {
    this.getCafes();
    
  }

}
