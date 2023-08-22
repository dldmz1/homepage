import math

orm = wiz.model("portal/season/orm")
db = orm.use("career")

def load():
    page = int(wiz.request.query("page", 1))
    dump = 7

    career = db.rows(
        page=page,
        dump=dump
    )

    lastpage = math.ceil(db.count(page=page, dump=dump) / dump)

    for i in range(len(career)):
        if career[i]["mode"] == 0:
            career[i]["status"] = "-"
        elif career[i]["mode"] == 1:
            career[i]["status"] = "집중 채용"
        elif career[i]["mode"] == 2:
            career[i]["status"] = "항시 채용"
        career[i]["mode"] = str(career[i]["mode"])
        
    wiz.response.status(200, {
        "post": career,
        "lastpage": lastpage,
    })

def save():
    data = wiz.request.query()
    
    data["mode"] = int(data["mode"])
    
    if not data.get("id"):
        db.insert(data)
    else:
        db.update(data, id=data["id"])

    wiz.response.status(200)

def remove():
    id = wiz.request.query("id", True)
    db.delete(id=id)
    wiz.response.status(200)