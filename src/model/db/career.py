import peewee as pw
orm = wiz.model("portal/season/orm")
# base = orm.base("orm")
base = orm.base()

class Model(base):
    class Meta:
        db_table = 'career'

    id = pw.IntegerField(primary_key=True)
    team = pw.CharField(max_length=50)
    job = pw.CharField(max_length=20)
    content = pw.TextField()
    mode = pw.IntegerField()
    url = pw.TextField()