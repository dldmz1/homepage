import { OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Service } from '@wiz/libs/portal/season/service';

export class Component implements OnInit {
    private tab = "";
    private menu = "";
    private cases = [
        {
            case: "KMBIG",
            index: "01",
            title: "한의 빅데이터 공유활용 서비스",
            summary: "AI 한의사 개발을 위한 임상 빅데이터 수집 및 서비스 플랫폼 구축",
            detail: "한의 빅데이터 공유활용 서비스(KMBIG)는 한국한의학연구원 'AI 한의사 개발을 위한 임상 빅데이터 수집 및 서비스 플랫폼 구축' 과제의 데이터 공유 활용을 위한 서비스이다. AI 개발이 가능한 고품질의 [한의 임상·문헌 빅데이터 확보] 및 지속 가능한 [AI 서비스·빅데이터 축적] 슨환 생태계 구축을 목표로 두고 있다. 연구자 및 일반인을 대상으로, 다양한 유형의 한의 빅데이터를 안전하고 효율적으로 공유, 분석, 관리할 수 있는 기능을 제공하는 것이 본 서비스의 목적이다.",
        },
        {
            case: "Cellytics-NK",
            index: "02",
            title: "NK세포 측정 분석 플랫폼",
            summary: "NK세포 면역기능 모니터링 플랫폼",
            detail: " ‘Cellytics-NK’ 플랫폼은 기존의 고가·대형·전문 분석기기를 사용해야만 제한적으로 가능했던 자연살해세포(Natural Killer Cell, NK) 활성도 검사 시장의 혁신을 선도할 것으로 기대된다. 핵심기술인 ‘렌즈프리 그림자 이미징 기술’과 ‘면역세포 활성도 신속자극제’를 기반으로 환자의 NK세포 수뿐만 아니라 단일세포의 활력을 신속하게 분석한 정보를 2시간 내 제공한다. 의료진에게 암세포사멸, 감염세포 사멸 등을 포함해 주요 면역세포 활성에 관여하는 자연살해세포의 정보를 제공함으로써 암 또는 질병에 대한 진단을 돕는다. 본 플랫폼은 간편한 분리 방식으로 숙련된 검사인력이 불필요하며, 단일세포 수준 분석이 가능하다. 이를 통해 기존의 개인 면역력 진단시장을 대체할 것으로 기대된다.",
        },
        {
            case: "New",
            index: "03",
            title: "제목을 입력해주세요",
            summary: "요약을 입력해주세요",
            detail: "내용을 입력해주세요",
        },
    ];
    private caseIndex = 0;
    private list = {};

    constructor(
        public service: Service,
        private router: Router,
    ) { }

    public async ngOnInit() {
        this.tab = WizRoute.segment.tab;
        this.menu = this.tab;
        this.list = this.cases[0];

        this.router.events.subscribe(async (event: Event) => {
            if (event instanceof NavigationEnd) {
                this.tab = WizRoute.segment.tab;

                if (this.tab !== undefined) {
                    this.service.href("/solutions/" + this.tab);
                }
            }
        })

        await this.service.render();
    }

    private async hover() {
        this.menu = '';
        await this.service.render();
    }

    private async leave() {
        this.menu = this.tab;
        await this.service.render();
    }

    private async github(item) {
        let url = "";

        if (item == 'dizest') {
            url = "https://github.com/season-framework/dizest";
        }
        else if (item == 'wiz') {
            url = "https://github.com/season-framework/wiz";
        }

        window.open(url);
    }

    private async showCase(index) {
        this.caseIndex = index;
        this.list = this.cases[index];
        await this.service.render();
    }
}