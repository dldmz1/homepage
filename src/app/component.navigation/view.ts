import { OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Service } from '@wiz/libs/portal/season/service';

export class Component implements OnInit {
    private menu = 0;

    constructor(
        public service: Service,
        private router: Router,
    ) { }

    public async ngOnInit() {
        this.setMenuByRoute(this.router.url);

        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.setMenuByRoute(event.urlAfterRedirects);
            }
        });
    }

    private async setMenuByRoute(url: string) {
        switch (url) {
            case '/':
                this.menu = 0;
                break;
            case '/about':
                this.menu = 1;
                break;
            case '/solutions/dizest':
            case '/solutions/wiz':
                this.menu = 2;
                break;
            case '/news':
                this.menu = 3;
                break;
            case '/career':
                this.menu = 4;
                break;
            default:
                this.menu = 0; // default value
        }

        await this.service.render();
    }
}