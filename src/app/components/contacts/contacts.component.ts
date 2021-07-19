import { Component, OnInit, Input } from '@angular/core';
import { ActionsService } from 'services/actions.service';

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    @Input() process: any;
    contactPersons: any;
    contactPersonType = {
        INSURED: 1,
        AGENT: 2,
        EMPLOYER: 5,
        ADVOCATE: 19,
        COMMISSIONED: 20,
        OTHER: 1,
        SURVIVOR: 22
    }
    contact: any;
    constructor(private actionsService: ActionsService) {
        this.contactPersons = [
            {
                id: 1,
                deliveryFlag: true,
                type: {
                    code: 1,
                    value: "מבוטח"
                },
                firstName: "ניקיטה",
                lastName: "ג'יין",
                identity: 278545412,
                address: {
                    homeNumber: 9,
                    cityName: "רחובות",
                    streetName: "אופנהיימר"
                },
                cellPhone: 525816206,
                email: "NIKITA_JAIN@AMAT.COM"
            },
            {
                id: 2,
                deliveryFlag: false,
                type: {
                    code: 21,
                    value: "סוכן"
                },
                firstName: "טוביה",
                lastName: "בצקי",
                identity: 433974846,
                address: {
                    cityName: "מחנה תל נוף",
                },
                cellPhone: 525452206,
            }
        ]
    }

    ngOnInit(): void {
        this.actionsService.on('reset-contacts', () => {
            //using loadContacts function instead write the emit code twice
            this.loadContacts(this.contactPersons[0])
        });

        this.actionsService.on('delete-contacts', () => {
            this.loadContacts();
        });

        this.actionsService.on('add-insured-to-contacts', (params: any) => {
            // using createContact function both for this and for add new contact instead of write the code twice
            this.createContact(params);
        });

    }

    loadContacts(newContact?: any) {
        this.contactPersons = [];
        if (newContact)
            this.contactPersons.push(newContact);
        this.updateContactsCount();
    }

    ngAfterViewInit() {
        this.initiate();

    }




    createContact(contact: any) {
        let newContact = {
            id: this.contactPersons.length,
            deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
            type: {
                code: 1,
                value: "מבוטח"
            },
            firstName: contact.firstName,
            lastName: contact.lastName,
            identity: contact.identity,
            address: {
                cityName: contact.address.cityName,
                streetName: contact.address.streetName
            },
            cellPhone: contact.cellPhone,
            email: contact.email
        }
        this.contactPersons.push(newContact);
        this.updateContactsCount();
    }

    isAmbulatoryProcess() {
        return this.process.processType === "AMBULATORY_HEALTH_CLAIM" || this.process.processType === "AMBULATORY_HEALTH_CLAIM_CONT";
    }

    contactIsInsured(contactPerson: any) {
        return contactPerson.type.code === this.contactPersonType.INSURED;
    }

    isInsuredInHealthClaim(contactPerson: any) {
        return this.isAmbulatoryProcess() && this.contactIsInsured(contactPerson);
    }

    addContactPerson() {
        this.createContact({
            // set id to length + 1, not length
            id: this.contactPersons.length + 1,
            deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
            type: {
                code: 5,
                value: "שאר"
            },
            firstName: "ישראל",
            lastName: "ישראלי",
            identity: 278545412,
            address: {
                homeNumber: 9,
                cityName: "רחובות",
                streetName: "אופנהיימר"
            },
            cellPhone: 525816206,
            email: "NIKITA_JAIN@AMAT.COM"
        })

    }

    initiate() {
       this.updateContactsCount();
    }

    updateContactsCount() {
        //write this code once for all usages
        this.actionsService.broadcast('update-contacts-count', this.contactPersons.length);
    }
}

