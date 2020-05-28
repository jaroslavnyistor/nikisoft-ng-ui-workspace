import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormArray, ValidatorFn } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

export class NsFormArray extends FormArray {
  private _touchedChanges = new BehaviorSubject(false);

  get touchedChanges(): Observable<boolean> {
    return this._touchedChanges;
  }

  constructor(
    controls: AbstractControl[],
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }

  markAsTouched(opts?: { onlySelf?: boolean }): void {
    const prevValue = this.touched;
    super.markAsTouched(opts);

    if (!prevValue) {
      this._touchedChanges.next(this.touched);
    }
  }

  markAllAsTouched(): void {
    super.markAllAsTouched();

    this._touchedChanges.next(true);
  }
}