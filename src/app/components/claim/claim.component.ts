import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClaimService } from 'services/claim-serive.service';
@Component({
    selector: 'claim',
    templateUrl: './claim.component.html',
    styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {
    @Input() processModel: any;
    @Output() refresh: EventEmitter<any> = new EventEmitter();
    pensionFollowUpType: any;
    canceledClaimStatus: any
    constructor(private mainService: ClaimService) {
        this.pensionFollowUpType = [
            { code: 1, value: "במעקב נכות שנתי" },
            { code: 2, value: "במעקב נכות רפואי" },
            { code: 3, value: "במעקב נכות שנתי ורפואי" },
        ]
        this.canceledClaimStatus = 2;
    }

    ngOnInit(): void {
    }




    hasIrragularMark() {
        return this.processModel && this.processModel.superClaim && this.processModel.superClaim.irregularSuperClaimFlag === true;
    }

    claimRemarks() {
        //change var to let
        let text = "";
        if (this.processModel.superClaim && this.processModel.superClaim.inquiryPorcessFlag) {
            text += "בירור";
            if (this.processModel.superClaim.pensionFollowUpForInsuredType) {
                text += ", ";
            }
        }
        return text;
    };

    getClaims() {
        if (!this.processModel.superClaim || !this.processModel.superClaim.operativeClaims) { return ''; }
        //change  var to let
        let ParticipatingClaims = this.getParticipatingClaims(this.processModel.superClaim.operativeClaims);
        return ParticipatingClaims ? ParticipatingClaims.map(function (claim: any) {
            return claim.company + "-" + claim.operativeClaimNum;
        }).join(",") : "אין תביעות משתתפות";
    };

    executeRefresh() {
        this.refresh.emit();
    }

    getParticipatingClaims(operativeClaims: any) {
        return operativeClaims.filter((claim: any) => claim.claimStatus.code !== this.canceledClaimStatus && this.mainService.isParticipatingClaim(claim));

    }
}
