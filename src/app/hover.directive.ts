import { Directive } from "@angular/core/";
import { HostBinding } from "@angular/core/";
import { HostListener } from "@angular/core/";

@Directive({
    selector: '[appHover]'
}) 
export class HoverDirective{

    @HostBinding('class.hovered') isHovered =  false;

    @HostListener('mouseenter') onMouseEnter(){
        this.isHovered = true; 
    }

    @HostListener('mouseleave') onmouseleave(){
        this.isHovered = false; 
    }
}