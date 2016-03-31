# sequelize-postgresql-test
Simple test for Sequelize / Postgresql / Docker with microservices architecture

Start Postgresql docker
docker run --name my-postgresql-db -p 5432:5432 -e POSTGRES_PASSWORD=123trungdt -d postgres:9.4
-> get the postgrsql db
-> create database mydb
-> import table events from directory database

Go to server 2
- checkout the source code this source code from git
- update the config of postgresql server
- run build.sh
- run run.sh
- install nginx if you want to test load balancing
-> apt-get install nginx
-> sudo nano /etc/nginx/sites-available/default
   -> add at the end. 172.17.0.1 is the local docker ip which you can find easily using ifconfig
   upstream backend  {
      server 172.17.0.1:3005;
      server 172.17.0.1:3006;
      server 172.17.0.1:3007;
      server 172.17.0.1:3008;
   }
   -> find location / { and make it like below
   location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
                 proxy_pass  http://backend;
        }
   -> Save file and exit 
->   sudo service nginx restart


Go to server 3
- Install ab
- create the urls.txt file. Please note that 192.241.179.185 is the IP of server 2 in my case
the content will be something like below
http://192.241.179.185:3002/
http://192.241.179.185:3006/

- run the benchmark

cat urls.txt | parallel 'ab -l -r -n 5000 -c 50 -k -H "Accept-Encoding: gzip, deflate" {}'

-> Notice: if you test with nginx load balancer, then you can use the URL http://192.241.179.185 (port 80)