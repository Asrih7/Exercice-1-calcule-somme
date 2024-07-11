import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calcul-somme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calcul-somme.component.html',
  styleUrl: './calcul-somme.component.css'
})
export class CalculSommeComponent {
  prices: number[] = [];
  total: number = 0;
  change: number = -1;
  dixEuroBills: number = 0;
  cinqEuroBills: number = 0;
  unEuroCoins: number = 0;

  addPrice(price: string): void {
    const priceValue = parseFloat(price);
    if (!isNaN(priceValue) && priceValue > 0) {
      this.prices.push(priceValue);
      this.total += priceValue;
    }
  }
  calculateChange(paid: string): void {
    const paidValue = parseFloat(paid);
    if (!isNaN(paidValue) && paidValue >= this.total) {
      this.change = paidValue - this.total;
      this.dixEuroBills = Math.floor(this.change / 10);
      this.change %= 10;
      this.cinqEuroBills = Math.floor(this.change / 5);
      this.change %= 5;
      this.unEuroCoins = Math.floor(this.change);
      this.change %= 1;
    } else {
      this.change = -1; 
    }
  }
}
