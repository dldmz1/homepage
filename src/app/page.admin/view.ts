import { OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Service } from '@wiz/libs/portal/season/service';

export class Component implements OnInit {
    private main = "";
    private sub = "";

    constructor(
        public service: Service,
        private router: Router,
    ) { }

    public async ngOnInit() {
        await this.mode();

        this.router.events.subscribe(async (event: Event) => {
            if (event instanceof NavigationEnd) {
                await this.mode();
            }
        })
    }

    private async mode() {
        this.main = WizRoute.segment.main;
        this.sub = WizRoute.segment.sub;

        // console.log("main: ", this.main);
        // console.log("sub: ", this.sub);

        await this.service.render();
    }
}