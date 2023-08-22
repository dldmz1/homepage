import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Service } from '@wiz/libs/portal/season/service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        public service: Service,
        public router: Router,
        public ref: ChangeDetectorRef
    ) { }

    public async ngOnInit() {
        await this.service.init(this);

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const element = document.getElementsByClassName('wiz-view')[0] as HTMLElement;
                if (element) {
                    element.scrollTop = 0;
                }
            }
        });
    }
}