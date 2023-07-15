from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flaskext.mysql import MySQL

app = Flask(__name__)
CORS(app)

app.config['MYSQL_DATABASE_HOST'] = 'db'
app.config['MYSQL_DATABASE_USER'] = 'myuser'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'user_info'

mysql = MySQL(app)
def check_post_table():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SHOW TABLES LIKE 'Post'")
    result = cursor.fetchone()
    if result:
        print("Post table already exists nothing changed")
        conn.close()
        cursor.close()
    else:
        create_post_table = """
        CREATE TABLE Post (
          id INT PRIMARY KEY AUTO_INCREMENT,
          username VARCHAR(50),
          title VARCHAR(100) NOT NULL,
          content TEXT,
          timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """

        cursor.execute(create_post_table)
        conn.close()
        cursor.close()
@app.route('/submit-registration', methods=['POST'])
def registration_submit():
    try:
        data = request.get_json()
        conn = mysql.connect()
        cursor = conn.cursor()
        query = 'SELECT username FROM User'
        cursor.execute(query)
        users = cursor.fetchall()

        username = data.get('username')
        password = data.get('password')

        for user in users:
            if username == user[0]:
                return jsonify(message='refused: taken username')
                break

        query = 'INSERT INTO User (username, password) VALUES (%s, %s)'
        cursor.execute(query, (username, password))
        conn.commit()
        
        cursor.close()
        conn.close()
        return jsonify(message='Data received successfully')
    except Exception as e:
        return jsonify(error=str(e)), 500

@app.route('/login-submit', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        entered_password = data.get('password')

        conn = mysql.connect()
        cursor = conn.cursor()

        query = 'SELECT password FROM User WHERE username = %s'
        cursor.execute(query, (username,))
        row = cursor.fetchone()

        if row:
            stored_password = row[0]
            if entered_password == stored_password:
                # Password matches
                return jsonify(message='Login successful')
        
        # Invalid username or password
        return jsonify(message='Invalid username or password') 
    except Exception as e:
        return jsonify(error=str(e)), 500

@app.route('/post-submit', methods=['POST'])
def post_submit():
    try:
        data = request.get_json()
        username = data.get('username')
        title = data.get('title')
        content = data.get('content')

        conn = mysql.connect()
        cursor = conn.cursor()

        insert_query = 'INSERT INTO Post (username, title, content) VALUES (%s, %s, %s)'
        cursor.execute(insert_query, (username, title, content))
        conn.commit()

        cursor.close()
        conn.close()
        return jsonify(message='Post data saved successfully')
    except Exception as e:
        return jsonify(error=str(e)), 500
@app.route('/posts')
def return_posts():
    try:
        conn = mysql.connect()
        cursor = conn.cursor()

        query = 'SELECT * FROM Post'
        cursor.execute(query)
        posts = cursor.fetchall()

        post_list = []
        for post in posts:
            post_dict = {
                'username': post[1],
                'title': post[2],
                'content': post[3],
            }
            post_list.append(post_dict)
        conn.close()
        cursor.close()
        return jsonify(posts=post_list)
    except Exception as e:
        return jsonify(error=str(e)), 400
if __name__ == '__main__':
    app.run()

