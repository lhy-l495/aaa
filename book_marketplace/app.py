from flask import Flask, render_template, request, redirect, url_for, session, flash
import os

app = Flask(__name__)
app.secret_key = 'a_very_secret_key' # In a real app, use a more secure secret key

# Simple in-memory data store (for demonstration purposes only)
users = {}
books = []
next_user_id = 1
next_book_id = 1

@app.route('/')
def index():
    # Display the last 5 books as "latest listings"
    latest_books = books[-5:]
    return render_template('index.html', books=latest_books)

@app.route('/register', methods=['GET', 'POST'])
def register():
    global next_user_id
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username in users:
            flash('Username already exists.')
        else:
            users[username] = {'id': next_user_id, 'password': password} # Don't store passwords in plain text in a real app
            next_user_id += 1
            flash('Registration successful. Please log in.')
            return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = users.get(username)
        if user and user['password'] == password: # Don't compare passwords in plain text in a real app
            session['user_id'] = user['id']
            session['username'] = username
            flash('Logged in successfully.')
            return redirect(url_for('index'))
        else:
            flash('Invalid username or password.')
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    session.pop('username', None)
    flash('You have been logged out.')
    return redirect(url_for('index'))

@app.route('/sell', methods=['GET', 'POST'])
def sell_book():
    if 'user_id' not in session:
        flash('Please log in to sell a book.')
        return redirect(url_for('login'))

    global next_book_id
    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']
        price = request.form['price']
        books.append({
            'id': next_book_id,
            'title': title,
            'author': author,
            'price': price,
            'seller_id': session['user_id']
        })
        next_book_id += 1
        flash('Book listed for sale!')
        return redirect(url_for('index'))

    return render_template('sell_book.html')

@app.route('/books')
def list_books():
    return render_template('list_books.html', books=books)

@app.route('/book/<int:book_id>')
def book_detail(book_id):
    book = next((b for b in books if b['id'] == book_id), None)
    if not book:
        flash('Book not found.')
        return redirect(url_for('index'))
    seller = next((u for u in users.values() if u['id'] == book['seller_id']), None)
    return render_template('book_detail.html', book=book, seller=seller)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)