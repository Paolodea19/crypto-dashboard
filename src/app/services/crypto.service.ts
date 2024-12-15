import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
    private apiUrl = 'https://api.coingecko.com/api/v3/';


  constructor() {}

  async getCryptoData(): Promise<any> {
    try  {
      const response = await axios.get(`${this.apiUrl}/coins/markets`, {
        params: {
          vs_currency: 'EUR',
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
          sparkline: false,
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error Fetching crypto data',error);
    }
  }


}
