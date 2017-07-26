import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitText'
})
export class LimitTextPipe implements PipeTransform{
    transform(value: string, limit:number){
        if(value.length < limit){
            return value;
        }else{
            return value.substr(0,limit)+'...';
        }
    }
}