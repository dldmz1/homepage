import peewee as pw
orm = wiz.model("portal/season/orm")
# base = orm.base("orm")
base = orm.base()

class Model(base):
    class Meta:
        db_table = 'team'

    id = pw.IntegerField(primary_key=True)
    team = pw.CharField(max_length=50)
    title = pw.TextField()
    detail = pw.TextField()