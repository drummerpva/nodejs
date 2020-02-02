TAG=$(shell git log -1 --format=%h)

build: 
	docker build -t php-apache-mysql .
login:
	docker login
tag: login
	docker tag php-apache-mysql drummerpva/php-apache-mysql:$(TAG)
push: tag 
	docker push drummerpva/php-apache-mysql:$(TAG)