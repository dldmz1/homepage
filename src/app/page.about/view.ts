import { OnInit } from "@angular/core";
import { Service } from '@wiz/libs/portal/season/service';

export class Component implements OnInit {
    private history = [];
    private team = [];

    constructor(
        public service: Service,
    ) { }

    public async ngOnInit() {
        await this.load();
    }

    public async alert(message: string, status: string = 'error', cancel: any = false, action: string = '확인') {
        return await this.service.alert.show({
            title: "",
            message: message,
            cancel: cancel,
            actionBtn: status,
            action: action,
            status: status
        });
    }

    private async load() {
        await this.loadHistory();
        await this.loadTeam();

        await this.service.render();
    }

    private async loadHistory() {
        const { code, data } = await wiz.call("history");
        if (code !== 200) {
            let error = "[ERROR] load history";
            await this.alert(error);
            return;
        }
        this.history = data;
    }

    private async loadTeam() {
        const { code, data }  = await wiz.call("member");
        if (code !== 200) {
            let error = "[ERROR] load member";
            await this.alert(error);
            return;
        }
        this.team = data;
    }
}