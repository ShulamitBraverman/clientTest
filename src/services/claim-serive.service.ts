import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor() { }

  isParticipatingClaim(claim: any) {
    claim.coverages.find((coverage: any) => { return coverage.claimParticipating; })
  }
}
