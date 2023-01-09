FROM alpine AS builder

ENV WATCHMAN_VERSION=2023.01.09.00
# Step 1: Install watchman runtime dependencies:
RUN apk update \
  && apk add --no-cache \
  gcc \
  musl-dev \
  openssl-dev \
  python-dev \
  git \
  libcrypto1.1 \
  libgcc \
  libstdc++

# Step 2: Install the watchman build dependencies' dependencies :)
RUN apk add --no-cache --update ca-certificates openssl

RUN apk add --no-cache \
 automake \
 autoconf \
 bash \
 build-base \
 libtool \
 linux-headers

RUN cd /tmp \
 && wget -O watchman.tar.gz "https://github.com/facebook/watchman/archive/v$WATCHMAN_VERSION.tar.gz" \
 && tar -xz -f watchman.tar.gz -C /tmp/ \
 && rm -rf watchman.tar.gz

WORKDIR /tmp/watchman-$WATCHMAN_VERSION

RUN ./autogen.sh \
  && ./configure --enable-lenient \
  && make \
  && make install \
  && cd $HOME \
  && rm -rf /tmp/*

FROM node:19.4-alpine
LABEL maintainer="Patrick LUZOLO"

RUN apk update && apk add --no-cache sudo bash git

COPY --from=builder /usr/local/bin/watchman* /usr/local/bin/
COPY --from=builder /usr/local/lib/python2.7 /usr/local/lib/python2.7/
COPY --from=builder /usr/local/var /usr/local/var
COPY --from=builder /usr/local/share/doc /usr/local/share/doc

RUN echo "node ALL=NOPASSWD: /usr/local/bin/npm" > /etc/sudoers.d/node

USER node

RUN sudo npm install --global --unsafe-perm react-native-cli \
  && sudo npm install --global --unsafe-perm create-react-native-app \
  && sudo npm install --global --unsafe-perm expo-cli \
  && sudo npm cache clean --force

WORKDIR /app

EXPOSE 8081
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD sleep infinity
