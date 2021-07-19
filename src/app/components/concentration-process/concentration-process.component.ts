import { Component, OnInit, Input } from '@angular/core';
import { ActionsService } from 'services/actions.service';

@Component({
    selector: 'concentration-process',
    templateUrl: './concentration-process.component.html',
    styleUrls: ['./concentration-process.component.scss']
})
export class ConcentrationProcessComponent implements OnInit {
    @Input()
    process: any;
    constructor(private actionsService: ActionsService) { }

    ngOnInit(): void {
    }

    isCompanyEmployer() {
        return this.process && this.process.insured && this.process.companyEmployer ? 'עובד חברה - ' + this.process.insured.position : '';
        // if (!this.process || !this.process.insured || !this.process.insured.companyEmployer) {
        //     return '';
            //else is not neccessary
        // } 
        // else {
            // return 'עובד חברה - ' + this.process.insured.position;
        // }
    };

    addInsuredToContacts() {
       this.actionsService.broadcast('add-insured-to-contacts', this.process.insured);
    }

}





