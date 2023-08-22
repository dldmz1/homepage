import peewee as pw
orm = wiz.model("portal/season/orm")
# base = orm.base("orm")
base = orm.base()

class Model(base):
    class Meta:
        db_table = 'history'

    id = pw.IntegerField(primary_key=True)
    year = pw.IntegerField()
    month = pw.IntegerField()
    content = pw.TextField()