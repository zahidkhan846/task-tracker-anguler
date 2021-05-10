import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddButton: boolean = false;
  private subject: any = new Subject<any>();
  constructor() {}
  toggleAddButton(): void {
    this.showAddButton = !this.showAddButton;
    this.subject.next(this.showAddButton);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
