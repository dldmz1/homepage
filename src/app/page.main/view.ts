import { OnInit } from '@angular/core';

export class Component implements OnInit {
    private logo = [
        "kisti.svg",
        "kreonet.svg",
        "etri.svg",
        "kiom.svg",
        "kriso.png",
        "kfe.png",
        "kus.svg",
        "ksnu.svg",
        "덕성여대.svg",
        "nuch.svg",
        "nice.svg",
        "eggtec.svg",
        "현대미포.png",
        "xslab.png",
        "kiae.png",
        "naver_connect.png",
        "국립중앙도서관.svg",
        "mit.png"
    ];

    public async ngOnInit() {
    }

    private async location() {
        window.open("https://goo.gl/maps/FLDWVrWR15ozbwdX9");
    }
}