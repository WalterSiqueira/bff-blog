FROM mysql:latest

# Set the MySQL root password (replace 'root_password' with your desired password)

ENV MYSQL_ROOT_PASSWORD=suroot
ENV MYSQL_DATABASE=user_info
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=root
# Copy the setup.sql file to the container's root directory
COPY setup.sql /setup.sql

# Expose the MySQL port
EXPOSE 3306

