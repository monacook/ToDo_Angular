import { Component, MatInputModule } from '@angular/material/input';

@Component ({
    selector: 'input[matInput]',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})

export class Input {
    // logic to take input into store 
    @Input() type: string
}