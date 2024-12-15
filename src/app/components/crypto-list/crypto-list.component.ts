import { Component } from '@angular/core';
import { CryptoService} from "../../services/crypto.service";

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrl: './crypto-list.component.css'
})
export class CryptoListComponent {
  cryptoData: any[] = [];
  isLoading = true;

  isApproximatelyZero(value: number): boolean {
    const threshold = 0.01; // Soglia di tolleranza
    return Math.abs(value) < threshold;
  }

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.fetchCryptoData();
  }

  async fetchCryptoData() {
    try {
      this.cryptoData = await this.cryptoService.getCryptoData();

  } catch (error) {
    console.error('Error Fetching crypto data',error);
  } finally {
    this.isLoading = false;}
  }
}
