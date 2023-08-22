import math

orm = wiz.model("portal/season/orm")
db = orm.use("history")

def load():
    page = int(wiz.request.query("page", 1))
    dump = 7

    history = db.rows(
        page=page,
        dump=dump,
        order="DESC",
        orderby="year,month,id"
    )

    lastpage = math.ceil(db.count(page=page, dump=dump) / dump)

    for i in range(len(history)):
        if history[i]['month'] < 10:
            history[i]['ym'] = str(history[i]['year']) + "-0" + str(history[i]['month'])
        else:
            history[i]['ym'] = str(history[i]['year']) + "-" + str(history[i]['month'])
    
    wiz.response.status(200, {
        "history": history,
        "lastpage": lastpage,
    })

def save():
    data = wiz.request.query()

    data['ym'] = data['ym'].split("-")
    data['year'] = int(data['ym'][0])
    data['month'] = int(data['ym'][1])

    if not data.get("id"):
        db.insert(data)
    else:
        db.update(data, id=data["id"])
    
    wiz.response.status(200)

def remove():
    id = wiz.request.query("id", True)
    db.delete(id=id)
    wiz.response.status(200)