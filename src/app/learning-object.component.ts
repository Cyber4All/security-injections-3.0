import { Component, Input } from '@angular/core';

@Component({
    selector: 'learning-object',
    templateUrl: './learning-object.component.html',
})

export class LearningObjectComponent {
    @Input() module;
    @Input() currentsection;
}