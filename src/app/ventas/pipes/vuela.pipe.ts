import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'vuela'
})

export class VuelaPipe implements PipeTransform{
    transform(bVuela: boolean): string {
        return (bVuela)? 'vuela':'no vuela';
    }

}