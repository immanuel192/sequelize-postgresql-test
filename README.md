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

Go to server 3
- Install ab
- create the urls.txt file
the content will be something like below
http://192.241.179.185:3002/
http://192.241.179.185:3006/

- run the benchmark

cat urls.txt | parallel 'ab -l -r -n 5000 -c 50 -k -H "Accept-Encoding: gzip, deflate" {}'