import math
import json
import os

orm = wiz.model("portal/season/orm")
db = orm.use("member")

def load():
    page = int(wiz.request.query("page", 1))
    dump = 7

    member = db.rows(
        orderby="team,id",
        page=page,
        dump=dump
    )

    lastpage = math.ceil(db.count(page=page, dump=dump) / dump)

    wiz.response.status(200, {
        "member": member,
        "lastpage": lastpage,
    })

def save():
    data = wiz.request.query()

    if not data.get("id"):
        db.insert(data)
    else:
        db.update(data, id=data["id"])
    
    wiz.response.status(200)

def remove():
    id = wiz.request.query("id", True)
    db.delete(id=id)
    wiz.response.status(200)

def upload():
    files = wiz.request.files()[0]
    filepath = json.loads(wiz.request.query("filepath", True))
    filename = json.loads(wiz.request.query("filename", True))

    path = os.path.join(filepath)

    if not os.path.exists(path):
        os.makedirs(path)
    
    fs = season.util.os.FileSystem(path)
    fs.write.file(filename, files)


def download():
    path = wiz.request.query("path", True)
    storage = wiz.model("storage").use(path)
    BASEPATH = storage.abspath()

    filename = wiz.request.query("name", True)
    filepath = os.path.join(BASEPATH, filename)

    wiz.response.download(filepath, as_attachment=False, filename=filename)