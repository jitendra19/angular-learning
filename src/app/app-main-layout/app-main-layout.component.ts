import { Component, OnInit } from "@angular/core";

import { FD_Rates } from "../../FD_rates";
import {numberToEnglish} from "../../commonFunctions";

@Component({
  selector: "app-main-layout",
  templateUrl: "./app-main-layout.component.html",
  styleUrls: ["./app-main-layout.component.css"]
})
export class AppMainLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  compoundingBy = [
    { label: "Monthly", value: 12 },
    { label: "Quarterly", value: 4 },
    { label: "Half Yearly", value: 2 },
    { label: "Yearly", value: 1 }
  ];

  model = new FD_Rates(0, null, this.compoundingBy[0].value);

  onPrincipalKeyup = function() {
    debugger;
    this.inWords = numberToEnglish(this.model.principal);  
  }

  inWords = numberToEnglish(this.model.principal);

  submitted = false;
  calculators = ['FD_calc', 'RD_calc', 'lumsum_calc', 'SIP_calc'];
  selectedCalc = this.calculators[0];

  output = {
    maturityAmount: 0,
    returnEarned: 0
  };

  calculateFD() {
    let base = 1 + this.model.intrestRate / (this.model.Compound * 100);
        this.output.maturityAmount =
          this.model.principal * Math.pow(base, this.model.Compound * 1);
        this.output.returnEarned =
          this.output.maturityAmount - this.model.principal;      
  }

  onSubmit() {
    switch(this.selectedCalc) {
      case this.calculators[0]: {
        this.calculateFD();
        break;
      }
      case this.calculators[1]: {
        
        break;
      }
      case this.calculators[2]: {
        
        break;
      }
      case this.calculators[3]: {
        
        break;
      }
      default: 
        break;
    }
    this.submitted = true;
  }

  newFDObject() {
    this.model = new FD_Rates(null, null, this.compoundingBy[0].value);
  }

  onSelectCalculator(id) {
    this.selectedCalc = this.calculators[id];
    this.newFDObject()
  }
}
