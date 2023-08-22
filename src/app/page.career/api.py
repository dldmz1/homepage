orm = wiz.model("portal/season/orm")
db = orm.use("career")

def load():
    team = wiz.request.query("team", True)

    if len(team) == 0:
        career = db.rows()
    else:
        career = db.rows(team=team)

    for i in range(len(career)):
        # title
        if career[i]["team"] == "개발팀":
            career[i]["title"] = "Software Developer(개발팀) - " + career[i]["job"]
        elif career[i]["team"] == "연구팀":
            career[i]["title"] = "AI convergence Technology Research Team(AI융합연구팀) - " + career[i]["job"]
        elif career[i]["team"] == "기획팀":
            career[i]["title"] = "Planning Team(기획팀) - " + career[i]["job"]
        elif career[i]["team"] == "경영지원팀":
            career[i]["title"] = "Management Support Team(경영지원팀) - " + career[i]["job"]
        else:
            career[i]["title"] = ""
        
        # status
        if career[i]["mode"] == 1:
            career[i]["status"] = "집중 채용"
        elif career[i]["mode"] == 2:
            career[i]["status"] = "항시 채용"

    wiz.response.status(200, career)