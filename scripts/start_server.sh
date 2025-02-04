#!/bin/bash
# Install Nginx and serve the Angular app
sudo yum install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Clear existing files and copy Angular build files to Nginx folder
sudo rm -rf /var/www/html/*
sudo cp -r /home/ec2-user/EmployeeDirectory-Angular/dist/EmployeeDirectory-Angular/* /var/www/html/

# Restart Nginx to serve the app
sudo systemctl restart nginx
