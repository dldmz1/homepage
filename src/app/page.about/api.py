orm = wiz.model("portal/season/orm")
historyDB = orm.use("history")
teamDB = orm.use("team")
memberDB = orm.use("member")

def history():
    rows = historyDB.rows(order="DESC", orderby="year,month,id")

    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    group = {}
    
    for entry in rows:
        year = entry['year']

        if year not in group:
            group[year] = []

        month_name = months[entry['month'] - 1]
        
        group[year].append({
            'month': month_name,
            'content': entry['content']
        })

    history = [{'year': k, 'list': v} for k, v in group.items()]

    wiz.response.status(200, history)

def member():
    team = teamDB.rows()
    member = memberDB.rows()

    for item in team:
        item["member"] = []

        for data in member:
            if item["team"] == data["team"]:
                item["member"].append({
                    "name": data["name"],
                    "position": data["position"],
                    "email": data["email"],
                    "img": data["img"]
                })

    wiz.response.status(200, team)