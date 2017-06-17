import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: "years",
  pure: false
})

export class ServiceYearsPipe implements PipeTransform {
  transform(input: Member[], desiredYears){
    var output: Member[] = [];
    if(desiredYears === "all") {
      return input;
    } else if (desiredYears === "vets") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].years > 15 ) {
          output.push(input[i]);
        }
      }
    } else if (desiredYears === "recruits") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].years <= 15 ) {
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
