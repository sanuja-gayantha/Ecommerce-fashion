import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { TimeComponents } from '../time-components';

@Component({
  selector: 'app-deal-of-the-week',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './deal-of-the-week.component.html',
  styleUrl: './deal-of-the-week.component.css'
})
export class DealOfTheWeekComponent {

  public timeLeft$: Observable<TimeComponents>;

  constructor() {
    this.timeLeft$ = interval(1000).pipe(
      map(x => this.calcDateDiff()),
      shareReplay(1)
    );
  }

  calcDateDiff(endDay: Date = new Date(2023, 12, 30)): TimeComponents {
    const dDay = endDay.valueOf();

    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    const timeDifference = dDay - Date.now();

    const daysToDday = Math.floor(
      timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    );

    const hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
    );

    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
    );

    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }

}
