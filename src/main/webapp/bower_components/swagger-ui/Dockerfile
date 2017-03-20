<<<<<<< HEAD
###
# swagger-ui-builder - https://github.com/swagger-api/swagger-ui/
# Container for building the swagger-ui static site
#
# Build: docker build -t swagger-ui-builder .
# Run:   docker run -v $PWD/dist:/build/dist swagger-ui-builder
#
###

FROM    ubuntu:14.04
MAINTAINER dnephin@gmail.com

ENV     DEBIAN_FRONTEND noninteractive

RUN     apt-get update && apt-get install -y git npm nodejs openjdk-7-jre
RUN     ln -s /usr/bin/nodejs /usr/local/bin/node

WORKDIR /build
ADD     package.json    /build/package.json
RUN     npm install
ADD     .   /build
CMD     ./node_modules/gulp/bin/gulp.js serve
=======
FROM alpine:3.3

MAINTAINER Roman Tarnavski

RUN apk add --update nginx

COPY nginx.conf /etc/nginx/
ADD ./dist/ /usr/share/nginx/html

EXPOSE 8080

CMD nginx -g 'daemon off;'
>>>>>>> 533092147c410637b99bf57166ee237aec486555
