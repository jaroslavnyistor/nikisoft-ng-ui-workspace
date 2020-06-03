import { Injectable } from '@angular/core';
import { NsPageStandardModel } from 'nikisoft-ng-ui';
import { AppNavigationService } from '../../service-provider/app-navigation.service';
import { AppServiceProvider } from '../../service-provider/app-service-provider';

@Injectable()
export class FormsDateModel extends NsPageStandardModel<AppServiceProvider, AppNavigationService> {
  constructor(serviceProvider: AppServiceProvider) {
    super(serviceProvider);
  }

  getStateKey(): string {
    return 'forms-date';
  }
}
