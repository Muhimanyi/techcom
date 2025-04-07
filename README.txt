npm install
npm run dev

then pick the address from the terminal...

-- 1. Create the database
CREATE DATABASE flutter_chat_app_with_nodejs;

-- 2. Create the user with password
CREATE USER 'acgoma'@'localhost' IDENTIFIED BY '12345678';

-- 3. Grant all privileges on the new database to the new user
GRANT ALL PRIVILEGES ON flutter_chat_app_with_nodejs.* TO 'acgoma'@'localhost';

-- 4. Apply the changes
FLUSH PRIVILEGES;
