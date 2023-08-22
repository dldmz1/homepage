import peewee as pw
orm = wiz.model("portal/season/orm")
# base = orm.base("orm")
base = orm.base()

class Model(base):
    class Meta:
        db_table = 'member'

    id = pw.IntegerField(primary_key=True)
    team = pw.CharField(max_length=50)
    name = pw.CharField(max_length=16)
    position = pw.CharField(max_length=32)
    email = pw.TextField()
    img = pw.TextField()