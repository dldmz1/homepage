import { OnInit } from "@angular/core";
import { Service } from '@wiz/libs/portal/season/service';

export class Component implements OnInit {
    private talent = [
        { index: 1, title: "창의성", subtitle: "Creativity", detail: "혁신적인 아이디어와 솔루션을 개발할 수 있는 사람으로서, 넓고 다양한 시야를 갖고 세상을 바라볼 수 있는 사람", svg: "2460.svg" },
        { index: 2, title: "전문성", subtitle: "Expertise", detail: "특정 분야에 대한 전문성을 가지고 꾸준히 기술 개발과 노력을 할 수 있는 사람", svg: "2464.svg" },
        { index: 3, title: "협업", subtitle: "Collaboration", detail: "다양한 분야의 전문가들과 함께 일하며 프로젝트를 수행하기 때문에 열린 태도를 바탕으로 타 조직과 방 향성을 공유하고 타인과 적극적으로 소통 할 줄 아는 사람", svg: "2458.svg" },
        { index: 4, title: "문제해결능력", subtitle: "Problem solving", detail: "넓고 다양한 시각을 가지며, 혁신적인 아이디어와 솔루션을 개발할 수 있는 창의적인 사고력을 가지고 있는 사람", svg: "2462.svg" },
        { index: 5, title: "도전/발전", subtitle: "Challenge/Development", detail: "상황에 안주하지 않고, 새로운 아이디어와 혁신을 통해 지속적인 개선과 발전을 추구하는 사람", svg: "2454.svg" },
        { index: 6, title: "몰입/집중", subtitle: "Immersion/Focus", detail: "우선순위를 정확히 파악하고, 명확한 목표를 가지고 결과물을 생산하는 능력을 가진 사람", svg: "2456.svg" },
    ];

    private benefit = [
        { title: "IMAC 지원", detail: "IMax, 서버 등 업무 장비를 지원합니다.", svg: "2598.svg" },
        { title: "업무용 소프트웨어 제공", detail: "업무에 필요한 소프트웨어를 제공합니다.", svg: "2599.svg" },
        { title: "유연근무제 도입", detail: "8-10시 사이 출근, 휴게 시간 제외 총 8시간 근무 후 퇴근(근무기록 30분 단위)", svg: "2600.svg" },
        { title: "연차휴가", detail: "일 / 시간제 휴가를 사용할 수 있습니다.", svg: "2601.svg" },
        { title: "석식지원", detail: "저녁 식대를 지원합니다.", svg: "2602.svg" },
        { title: "간식 및 커피 제공", detail: "각종 간식 및 음료, 커피를 제공합니다.", svg: "2592.svg" },
        { title: "명절 선물 지원", detail: "매년 설날과 추석 명절 선물을 지원합니다.", svg: "2603.svg" },
        { title: "경조사 지원", detail: "자족의 경조사 발생 시 조의의 마음을 전하기 위해 경조 휴가, 경조사비, 경조화환을 지원합니다.", svg: "2590.svg" },
        { title: "교육 및 자기계발 지원", detail: "직무와 관련된 교육 및 세미나 등의 수강을 지원합니다.", svg: "2589.svg" },
        { title: "사내 도서 지원", detail: "업무 관련 도서 구입비를 지원합니다.", svg: "2604.svg" },
        { title: "과학기술인공제회 연금", detail: "과학기술인공제회에 가입하여 팀원들의 여유자금(목돈)을 일시에 거치하여 높은 이율로 안전하게 증시켜 연금으로 지급합니다.", svg: "2605.svg" },
        { title: "4대보험", detail: "4대(국민연금 / 건강보험 / 고용보험 / 산재보험) 보험을 지원합니다.", svg: "2586.svg" },
    ];

    private post = [];

    constructor(
        public service: Service,
    ) { }

    public async ngOnInit() {
        await this.select();
    }

    private async select(team = "") {
        const { code, data } = await wiz.call("load", { team });
        if (code !== 200) {
            alert("ERROR!");
            return;
        }
        this.post = data;
        await this.service.render();
    }

    private async href(url) {
        window.open(url);
    }

}