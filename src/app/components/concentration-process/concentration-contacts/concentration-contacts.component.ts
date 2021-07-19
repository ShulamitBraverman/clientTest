import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ActionsService } from 'services/actions.service';

@Component({
  selector: 'concentration-contacts',
  templateUrl: './concentration-contacts.component.html',
  styleUrls: ['./concentration-contacts.component.scss']
})
export class ConcentrationContactsComponent implements OnInit {
  @Output() add: EventEmitter<any> = new EventEmitter();
  constructor(private actionsService: ActionsService) { }
  count: any = 0;
  isToShow: boolean = true
  ngOnInit(): void {
    this.actionsService.on('update-contacts-count', (count: any) => {
      this.count = count;
    });
  }

  resetContacts() {
    this.actionsService.broadcast( 'reset-contacts' );
  }

  deleteContacts() {
    this.actionsService.broadcast('delete-contacts');
  }

  addToContacts() {
    this.add.emit();
  }



}




