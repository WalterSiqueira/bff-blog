Vim�UnDo� �.�EeûH X���	&��0���7)��      )                             d��7    _�                             ����                                                                                                                                                                                                                                                                                                                                                             d�>�    �                  �              5��                                           �      5�_�                      #    ����                                                                                                                                                                                                                                                                                                                                         #       v   #    d���     �               #  username VARCHAR(50) PRIMARY KEY,     email VARCHAR(100) NOT NULL,5��       #                 P                      5�_�                       0    ����                                                                                                                                                                                                                                                                                                                               1          0       v   1    d��    �               0  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,   2  FOREIGN KEY (username) REFERENCES User(username)5��       0      2           ?      3               5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                 v       d���     �                   -- Create the Post table5��                         u                      5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                 v       d���     �               CREATE TABLE Post (5��                        �                     5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                 v       d���    �               CREATE TABLE post (5��                        �                     �                        �                     �                        �                     5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                 v       d���     �               );5��                         s                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v       d���    �               )5��                         s                      �                         s                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       d��#     �               CREATE TABLE Post (   $  id INT PRIMARY KEY AUTO_INCREMENT,     username VARCHAR(50),     title VARCHAR(100) NOT NULL,     content TEXT,   0  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,   );5��                        v       �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       d��$     �               C5��                          u                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       d��%    �                �             �                �             5��                          u               �       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  v        d�د     �              	   CREATE TABLE Post (   $  id INT PRIMARY KEY AUTO_INCREMENT,     username VARCHAR(50),     title VARCHAR(100) NOT NULL,     content TEXT,   /  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP   );        5��                          u       �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        d�ذ   	 �                  �               5��                         u               �       5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                  v        d��b   
 �      
           username VARCHAR(50),5��                      	   �               	       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        d��6    �               )5��                         s                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  v        d�ؤ     �                  5��                                   )              5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  v        d�ئ     �              �                 CREATE TABLE Post (   $  id INT PRIMARY KEY AUTO_INCREMENT,     username VARCHAR(50),     title VARCHAR(100) NOT NULL,     content TEXT,   /  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP   );5��                                          �       5�_�                      #    ����                                                                                                                                                                                                                                                                                                                            
          	   $       v   $    d�>�    �               #  username VARCHAR(50) PRIMARY KEY,5��       #                 P                      5�_�                    	   $    ����                                                                                                                                                                                                                                                                                                                               1          0       v   1    d��T    �               $  id INT PRIMARY KEY AUTO_INCREMENT,5��       $                 �                      5�_�                       0    ����                                                                                                                                                                                                                                                                                                                               a          0       v   1    d���     �               0  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,5��       0      2           '      3               5�_�                     	   $    ����                                                                                                                                                                                                                                                                                                                                                 v       d���    �      
         $  id INT PRIMARY KEY AUTO_INCREMENT,     username VARCHAR(50),5��       $                 �                      �    	                     �                     �    	                     �                     �    	                    �                     5��