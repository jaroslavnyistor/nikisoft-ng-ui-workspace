import { Injectable } from '@angular/core';
import { NsFormControlAutocompleteModel } from '../../../../../../../nikisoft-ng-ui/src/lib/form/controls/autocomplete/ns-form-control-autocomplete.model';
import { FormsAutocompleteDataService } from '../../forms-autocomplete-data.service';
import { FormsAutocompleteBasicEntity } from '../forms-autocomplete-basic.entity';

@Injectable()
export class FormsAutocompleteBasicCustomerNameModel extends NsFormControlAutocompleteModel<
  FormsAutocompleteBasicEntity,
  FormsAutocompleteDataService
> {
  constructor(service: FormsAutocompleteDataService) {
    super({
      key: 'customerName',
      label: 'Customer name',
      isRequired: true,
      service,
      autofocus: true,
    });
  }
}