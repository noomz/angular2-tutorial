/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

class FriendsService {
  names: Array<string>;

  constructor() {
    this.names = ["Nemopear", "Nattapol", "Rit", "Nat V", "Thanyawan"];
  }
}

@Component({
  selector: 'display',
  injectables: [FriendsService]
})
@View({
  template: `
    <p>Friends:</p>
    <ul>
      <li *for="#name of names">
        {{ name }}
      </li>
    </ul>

    <p *if="names.length > 3">You have many friends!</p>
  `,
  directives: [For, If]
})

class DisplayComponent {
  names: Array<string>;

  constructor(friendsService:FriendsService) {
    this.names = friendsService.names;
  }
}

bootstrap(DisplayComponent);
