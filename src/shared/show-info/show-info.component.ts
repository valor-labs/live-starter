import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { ShowInfoDate } from './showInfoDate.interface';
import { Config } from '../../app.config';
import { Show } from '../../event-launch/event-launch.model';
import { User } from '../../user-service/user.model';
import { Statistics } from '../statistics/statistics.interface';
import { LocalStorageService } from '../index';
import { ShowInfo } from './info.interface';
import { PurchaseParamsModel } from '../purchase-container/purchase-container.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['../../my-events/styles.scss', './show-info.component.scss']
})

export class ShowInfoComponent {
  @Input() set info(data: ShowInfo) {
    if (!data) {
      return;
    }

    this.isEvent = data.isEvent;
    this.show = data.show;

    if (this.show) {
      this.parseDate(this.show.timePerformance.start);
      this.purchaseParams = new PurchaseParamsModel(this.show._id, this.currentUser ? this.currentUser._id : null);
    }

    if (!this.isEvent) {
      this.user = data.user;
      this.statistics = {
        likes: this.user.statistics.likes.liked,
        followers: this.user.statistics.followers,
        viewers: this.user.statistics.viewers,
        shows: this.user.shows.owned
      };
      return;
    }
    this.user = new User({_id: this.show.creator});
    this.statistics = this.show.statistics;
  };
  @Input() isSmall = false;
  @Input() isMyEvents = false;
  @Input() isEventAdministratedByCurrentUser = false;

  date: ShowInfoDate;
  show: Show;
  user: User;
  currentUser: User;
  statistics: Statistics;
  isEvent: boolean;
  isGoToEventPage = true;
  purchaseParams: PurchaseParamsModel;

  constructor(private router: Router,
              private localStorageService: LocalStorageService) {
    try {
      const currentUserProfile = JSON.parse(this.localStorageService.getItem('profile'));
      if (!currentUserProfile) {
        this.currentUser = null;
        return;
      }

      this.currentUser = new User(currentUserProfile);
    } catch (err) {
      this.currentUser = null;
      console.error('something went wrong: ', err);
    }
  }

  parseDate(date: string): void {
    const startDate = new Date(date);
    this.date = {
      dayNum: moment(startDate).format('Do').replace('th', ''),
      month: moment(startDate).format('MMMM'),
      time: moment(startDate).format('h:mm a').replace(' ', '')
    };
  }

  sliceDescription(maxLength = 100): string {
    if (!this.isEvent) {
      return this.user.biography.slice(0, maxLength);
    }

    return this.show.description.slice(0, maxLength);
  }

  getImgUrl(): string {
    if (!this.isEvent) {
      return this.user.avatar;
    }

    return `${Config.api}/uploads/posters/${this.show.posters[0]}`;
  }

  gotoAnotherPage(isEvent = this.isEvent): void | undefined {
    let path = '/show-page';

    if (!isEvent) {
      path = 'artist-profile';
      const setcurrentUser = {
        _id: this.user._id
      };
      this.localStorageService.setItem('currentUser', setcurrentUser);
    }

    if (isEvent) {
      const setCurrentShowData = {
        findById: this.show._id,
        findByName: this.show.name,
        findByCreator: this.show.creator
      };
      this.localStorageService.setItem('currentShow', setCurrentShowData);
    }

    this.router.navigate([path]);
  }

  setShowIsBought(evt: boolean, show: Show): void {
    show.isBought = evt;
  }
}
