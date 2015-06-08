if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var credits_1 = require('./credits');
var TodoListComponent = (function () {
    function TodoListComponent() {
        this.todos = ["Get well", "Drink Matcha Latte"];
    }
    TodoListComponent.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoListComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoListComponent = __decorate([
        angular2_1.Component({
            selector: 'todolist',
        }),
        angular2_1.View({
            template: "\n  <h3>Todos</h3>\n  <ul>\n    <li *for=\"#todo of todos\">{{ todo }}</li>\n  </ul>\n  <input #todotext (keyup)=\"doneTyping($event)\">\n  <button (click)=\"addTodo(todotext.value)\">Add</button>\n\n  <credit></credit>\n  ",
            directives: [angular2_1.For, credits_1.CreditComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
})();
angular2_1.bootstrap(TodoListComponent);
