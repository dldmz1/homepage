import { OnInit } from '@angular/core';
import { Service } from '@wiz/libs/portal/season/service';

export class Component implements OnInit {
    private history = [];
    private list = {};

    private mode = 0;
    private page = {
        start: 1,
        end: 1,
        current: 1,
    };

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
        const { code, data } = await wiz.call("load", { page: this.page.current });
        if (code !== 200) {
            let error = "[ERROR] load history";
            await this.alert(error);
            return;
        }

        this.history = data.history;
        this.page.end = data.lastpage;

        await this.service.render();
    }

    private async move(index: number) {
        this.page.current = index;
        await this.load();
    }

    private async tab(data) {
        this.mode = data;

        if (data === 0) {
            let table = document.getElementById("table");
            table.style.display = 'block';

            let edit = document.getElementById("edit");
            edit.style.display = 'none';

            this.list = {};
        }

        else if (data === 1) {
            let table = document.getElementById("table");
            table.style.display = 'none';

            let edit = document.getElementById("edit");
            edit.style.display = 'block';
        }

        await this.service.render();
    }

    private async create() {
        this.list = {};
        await this.tab(1);
    }

    private async edit(index) {
        this.list = this.history[index];
        await this.tab(1);

        document.getElementById('yyyy-mm').value = this.list.ym;
        await this.service.render();
    }

    private async save() {
        let res = await this.service.alert.show({
            title: "",
            message: "저장하시겠습니까?",
            action: "Yes",
            cancel: "No"
        });
        if (!res)
            return;

        let message = "";
        let status = "error";

        if (!this.list.ym) {
            message = "날짜를 선택해주세요";
        }
        else if (!this.list.content) {
            message = "내용을 작성해주세요";
        }
        else {
            message = "정보가 성공적으로 저장되었습니다.";
            status = "success";

            const { code } = await wiz.call("save", this.list);
            if (code !== 200) {
                let error = "오류로 인해 데이터를 저장할 수 없습니다.";
                await this.alert(error);
                return;
            }

            await this.tab(0);
            await this.load();
        }

        await this.alert(message, status);
    }

    private async remove() {
        let res = await this.service.alert.show({
            title: "",
            message: "정말로 삭제하시겠습니까?",
            action: "Yes",
            cancel: "No"
        });
        if (!res)
            return;

        const { code } = await wiz.call("remove", { id: this.list.id });
        if (code !== 200) {
            let error = "오류로 인해 데이터를 삭제할 수 없습니다.";
            await this.alert(error);
            return;
        }

        await this.alert("선택한 항목이 성공적으로 삭제되었습니다.", "success");
        await this.tab(0);
        await this.load();
    }
}