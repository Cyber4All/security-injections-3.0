import { Component, Input} from '@angular/core';

@Component({
    selector: 'security-injection',
    templateUrl: './security-injection.component.html',
})

export class SecurityInjectionComponent {
    @Input() module;
    @Input() sectionscompleted: number;
    @Input() currentsection;
    @Input() currentsectionIndex: number;
    constructor() { }
    ngOnInit() {
    }
    /**
   * helper method to toggle classes on correct/incorrect elements
   *
   * PARAMETERS
   * 		type of element - "question" or "checkbox" or "checklist", etc.
   * 		id - the id of the question to classify
   * 		right - boolean for whether the question is correct or not
   *
   * RETURN right, for convenience
   */
    classify(type, id, right) {
        if (right) {			// element is correct
            //console.log("right");
            $(id).removeClass('si-' + type + '-incorrect');
            $(id).addClass('si-' + type + '-correct');
        } else {			// element is incorrect
            //console.log("wrong");
            $(id).removeClass('si-' + type + '-correct');
            $(id).addClass('si-' + type + '-incorrect');
        }
        return right;
    }

    /* method to check all answers in current section
    * called when 'check answers' button is selected
    *
    * FOR EACH graded answer
    * 	classify as correct or incorrect (to trigger CSS changes)
    * IF all answers are correct, enable 'continue' button
    */
    checkAnswers() {
        let perfect = true;		// true if all questions/checklists are correct

        // go through each question and checklist, see if it's right
        for (let i = 0; i < this.currentsection.units.length; i++) {
            const unit = this.currentsection.units[i];
            const id = '#' + unit.id;
            let right = true;	// until proven wrong

            if (unit.type === 'question') {

                switch (unit.mode) {

                    case 'radio':
                        // perfect &= classify("question", id, unit.value == unit.answer);
                        right = this.classify('question', id, unit.value === unit.answer);
                        break;

                    case 'checkbox':
                        let correct = true; // true if this question is correct
                        // determine whether each box should be checked
                        for (let j = 0; j < unit.choices.length; j++) {
                            const choice = unit.choices[j];
                            const choice_id = id + '-' + choice.id;


                            // if checkbox hasn't been touched, angular thinks it is undefined
                            if (typeof (choice.value) === 'undefined') {
                                choice.value = false;
                            }
                            const item_right = choice.value === choice.ans;
                            correct = correct && item_right;

                            this.classify('checkbox', choice_id, item_right);
                            this.classify('checkbox-label', choice_id + '-label', item_right);
                        }

                        // perfect &= classify("question", id, correct);
                        right = this.classify("question", id, correct);

                        break;

                    case 'textarea':
                        const re = new RegExp(unit.pattern);
                        if (unit.pattern === null) {
                            right = this.classify('question', id, true);
                        }
                        // perfect &= classify("question", id, re.test(unit.value));
                        else {
                            right = this.classify('question', id, re.test(unit.value));
                        }
                        break;

                    // TODO (ongoing) maintain functionality for new question modes

                }
            } else if (unit.type === 'checklist') {
                let correct = true; // true if all boxes are appropriately checked

                // determine whether each box should be checked
                for (let j = 0; j < unit.list.length; j++) {
                    const group = unit.list[j];
                    const group_id = id + '-' + group.id;

                    for (let k = 0; k < group.items.length; k++) {
                        const item = group.items[k];
                        const item_id = group_id + '-' + item.id;

                        // if checkbox hasn't been touched, angular thinks it is undefined
                        if (typeof (item.value) === 'undefined') {
                            item.value = false;
                        }
                        // when checkbox is mediated by javascript, must manually bind item.value
                        if (item.js) {
                            item.value = $(item_id).is(':checked');
                        }

                        const item_right = item.value === item.ans;
                        correct = correct && item_right;

                        this.classify('checkbox', item_id, item_right);
                        this.classify('checkbox-label', item_id + '-label', item_right);
                    }
                }

                right = right && this.classify('checklist', id, correct);
            }

            if (!right) {
                perfect = false;
                // this.score.sections[this.currentsectionIndex].questions[unit.id] += 1;	// count attempt
            }
        }

        // IF user has just successfully completed a new section
        if (perfect && this.currentsectionIndex === this.sectionscompleted) { //TODO ERROR HERE 
            // register time between starting and ending section
            /* const now = new Date();
             //TODO check that now.getTime is correct
             this.score.sections[this.sectionscompleted].time = now.getTime() - this.starttime;
             // update time
             this.starttime = now;
             */
            // increment number of sections
            this.sectionscompleted++;
        }
        //this.saveCookie(this.sectionscompleted);
    }

    /**
     * method used to change sections
     * fails if user has not completed up to the given section
     *
     * PARAMETERS: i - the new section index
     */

    checkButtons(i) {
        let needChecked = false;
        for (let j = 0; j < this.module.sections[i].units.length; j++) {
            const unit = this.module.sections[i].units[j];
            if ((unit.type === 'question') || (unit.type === 'checklist')) {
                needChecked = true;
            }
        }
        if (needChecked === false) {
            this.checkAnswers();
        }
        return needChecked;
    }

    gotoSection(i) {
        if (i <= this.sectionscompleted) {
            this.currentsectionIndex = i;
            this.currentsection = this.module.sections[i];
            //this.saveCookie(this.sectionscompleted);
        } else {
            console.log('Cannot go to section ' + i + ': may only go up to section ' + this.sectionscompleted);
        }
        $('body').animate({ scrollTop: 0 }, 500);
    }

}
