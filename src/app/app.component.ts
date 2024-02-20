import { Component } from '@angular/core';


interface Symbol {
  symbol: string;
  industry: string;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  closePrice: number;
  volume: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // symbols: Symbol[] = [];
  symbols: Symbol[] = [
    {
      symbol: 'REL',
      industry: 'Refineries & Marketing',
      openPrice: this.getRandomPrice(),
      highPrice: this.getRandomPrice(),
      lowPrice: this.getRandomPrice(),
      closePrice: this.getRandomPrice(),
      volume: this.getRandomVolume()
    }
  ];
  // subscribedSymbols: string[] = [];
  subscribedSymbols: string[] = this.symbols.map(symbol => symbol.symbol);
  addSymbol(event: Event, symbol: string, industry: string) {
    event.preventDefault();
    symbol = symbol.toUpperCase().trim();;
    industry = industry.charAt(0).toUpperCase() + industry.slice(1).toLowerCase();

    if (!this.subscribedSymbols.includes(symbol)) {
      this.subscribedSymbols.push(symbol);
      this.symbols.push({
        symbol,
        industry,
        openPrice: this.getRandomPrice(),
        highPrice: this.getRandomPrice(),
        lowPrice: this.getRandomPrice(),
        closePrice: this.getRandomPrice(),
        volume: this.getRandomVolume()
      });
    } else {
      alert('Symbol is already subscribed');
    }
  }

  getRandomPrice() {
    return Math.random() * 1000;
  }

  getRandomVolume() {
    return Math.floor(Math.random() * 10000);
  }

  updatePrices() {
    this.symbols.forEach(symbol => {
      symbol.openPrice = this.getRandomPrice();
      symbol.highPrice = this.getRandomPrice();
      symbol.lowPrice = this.getRandomPrice();
      symbol.closePrice = this.getRandomPrice();
      symbol.volume = this.getRandomVolume();
    });
  }
  getIndustryColor(industry: string) {
    industry = industry.toLowerCase();
    switch (industry) {
      case 'refineries & marketing':
        return 'green';
      case 'computers - software & consulting':
        return 'burlywood';
      case 'private sector bank':
        return 'blue';
      case 'nbfc':
        return 'chocolate';
      case 'diversified fmcg':
        return 'pink';
      default:
        return 'black';
    }
  }
  ngOnInit() {
    setInterval(() => {
      this.updatePrices();
    }, 1000);
  }
  sortSymbols() {
    this.symbols.sort((a, b) => a.symbol.localeCompare(b.symbol));
  }
  
}