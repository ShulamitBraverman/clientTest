import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'claim-app',
  templateUrl:  './claim-app.component.html',
  styleUrls: ['./claim-app.component.scss']
})
export class ClaimAppComponent implements OnInit {
process: any;
  constructor() { 
 
  }

  ngOnInit(): void {
    this.process = {
        processType: "AMBULATORY_HEALTH_CLAIM",
        processStatus: 1,
        superClaim: {
            inquiryPorcessFlag: true,
            irregularSuperClaimFlag: false,
            pensionFollowUpForInsuredType: 0,
            superClaimStatus : {
                code : 1,
                value : "פתוחה"
            },
            deathAfterDisabilityFlag: false,
            operativeClaims: [
                {
                    operativeClaimNum: 123,
                    company : 2,
                    claimStatus : {
                        code : 2,
                        value : "פתוחה"
                    },
                    coverages: [
                        {
                            coverageNum: 1,
                            claimParticipating: false
                        },
                        {
                            coverageNum: 2,
                            claimParticipating: false
                        }
                    ]
                }, {
                    operativeClaimNum: 24531,
                    company : 1,
                    claimStatus : {
                        code : 1,
                        value : "מבוטלת"
                    },
                    coverages: [
                        {
                            coverageNum: 1,
                            claimParticipating: true
                        },
                        {
                            coverageNum: 2,
                            claimParticipating: false
                        }
                    ]
                }
            ]
        },
        insured : {
            companyEmployer : true,
            position: "פקיד",
            identity : 27854122145,
            firstName : "מריה",
            lastName : "ג'יין",
            age: 35,
            lastJobDescription : "כללי - מקפת",
            smokingCode : 0,
            email : "NIKITA_JAIN@AMAT.COM",
            address : {
                cityName : "רעננה",
                streetName : "אחוזה",
                cellPhone : 544485236
            }
        },
  
    }
 
  }
  refreshProcess() {
    this.process.superClaim.inquiryPorcessFlag = false;
    this.process.superClaim.irregularSuperClaimFlag = true;
}   
     

}
