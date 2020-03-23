import { Observable } from 'rxjs';
import { nsGraphQlQueryErrorMapper } from '../../../../graphql/ns-graph-ql-query-error.mapper';
import { nsArrayItemAt } from '../../../../utils/helpers/arrays/ns-helpers-arrays';
import { NsSubscriptionService } from '../../../../utils/subscription/ns-subscription.service';
import { NsServiceProvider } from '../../../ns-service-provider';
import { NsFormControlAutocompleteItemEntity } from './ns-form-control-autocomplete-item.entity';

export abstract class NsFormControlAutocompleteService<TAutocompleteItem extends NsFormControlAutocompleteItemEntity>
   extends NsSubscriptionService {
   private readonly _serviceProvider: NsServiceProvider;

   protected constructor(serviceProvider: NsServiceProvider) {
      super();
      this._serviceProvider = serviceProvider;
   }

   abstract getLoadListObservable(search: string): Observable<TAutocompleteItem[]>;

   parseError(error: any): string {
      const errorMessages = this._serviceProvider.serverApiErrorResolver.resolve(
         nsGraphQlQueryErrorMapper,
         this._serviceProvider.langService,
         error
      );

      return nsArrayItemAt(errorMessages, 0);
   }

   handleDependingOnValuesChanged(results: any[]) {

   }
}
