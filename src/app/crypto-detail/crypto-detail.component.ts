import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrl: './crypto-detail.component.css'
})
export class CryptoDetailComponent implements OnInit {
     cryptoId!: string;
     cryptoDetails:any;
     isLoading = true;
     showFullDescription = false;

     constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
       this.cryptoId = this.route.snapshot.params['id'] || '';
       this.fetchCryptoDetails();

  }

  fetchCryptoDetails() {
       const apiUrl = `https://api.coingecko.com/api/v3/coins/${this.cryptoId}`;
       this.http.get(apiUrl).subscribe(
         (data) =>{
           this.cryptoDetails = data;
           this.isLoading = false;
           console.log(data);
         },
         (error) => {
           console.log(error)
           this.isLoading = false;
         }
       );
  }

  toggleDescription(): void {
    this.showFullDescription = !this.showFullDescription;
  }

  protected readonly crypto = crypto;
}
