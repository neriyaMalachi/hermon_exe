import mysql.connector
import os

class DataLoader:
    def __init__(self):
        self.conn = mysql.connector.connect(
            host=os.getenv("MYSQL_HOST"),
            user=os.getenv("MYSQL_USER"),
            password=os.getenv("MYSQL_PASSWORD"),
            database=os.getenv("MYSQL_DATABASE")
        )

    def get_data(self):
        cursor = self.conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM data")
        return cursor.fetchall()





