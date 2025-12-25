import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  providers: [DatePipe],
  styleUrls: ['./footer.scss'],
  templateUrl: './footer.html',
})
export class Footer {
  formattedDate: string;

  constructor(private datePipe: DatePipe) {
    this.formattedDate =
      this.datePipe.transform(new Date(), 'yyyy')!;
  }
}