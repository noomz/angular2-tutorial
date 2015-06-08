import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'credit'
})
@View({
    template: '<p>{{ message }}</p>'
})

export class CreditComponent {
    message: string;

    constructor() {
        this.message = "Opendream Co.,LTD"
    }
}

bootstrap(CreditComponent)
