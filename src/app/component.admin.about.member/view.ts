import { OnInit } from '@angular/core';
import { Service } from '@wiz/libs/portal/season/service';

export class Component implements OnInit {
    private member = [];
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
            let error = "[ERROR] load member";
            await this.alert(error);
            return;
        }

        this.member = data.member;
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
        this.list = this.member[index];
        await this.tab(1);
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

        if (!this.list.team) {
            message = "팀을 선택해주세요";
        }
        else if (!this.list.name) {
            message = "이름을 작성해주세요";
        }
        else if (!this.list.position) {
            message = "직급을 작성해주세요";
        }
        else if (!this.list.email) {
            message = "메일 주소를 작성해주세요";
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

    private async ceo() {
        let message = "권한이 필요합니다.";
        await this.alert(message);
    }

    private async upload() {
        let file = await this.service.file.select({ accept: '.bmp,.jpeg,.png,.svg', multiple: false });
        file = file[0];
        let fd = new FormData();

        if (!file.filepath) file.filepath = "/var/www/jeongin/storage/profile";
        if (!file.filename) file.filename = file.name;

        fd.append("file[]", file);
        fd.append("filepath", JSON.stringify(file.filepath));
        fd.append("filename", JSON.stringify(file.filename));

        let url = wiz.url("upload");
        await this.service.file.upload(url, fd);

        this.list.img = wiz.url("download?path=" + file.filepath + "&name=" + file.filename);
        await this.service.render();
    }
}