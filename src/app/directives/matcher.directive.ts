import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appMatcher]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatcherDirective,
      multi: true
    }
  ]
})
export class MatcherDirective implements Validator {
  constructor( @Attribute('appMatcher') public validateEqual: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        const v = c.value;

        // control value (e.g. password)
        const e = c.root.get(this.validateEqual);

        // value not equal
        if (e && v !== e.value) { return {
            validateEqual: false
        };
        }
        return null;
    }
}
