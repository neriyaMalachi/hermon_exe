
command to pull the sql 

docker run -d --name class_mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=school_db -p 3306:3306 -v mysql_data:/var/lib/mysql mysql:8.0
