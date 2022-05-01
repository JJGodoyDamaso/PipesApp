import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
 
    transform(value: string, enmayusculas:boolean=true) {
        return (enmayusculas) ? value.toUpperCase(): value.toLowerCase();
    }
   
}