FROM alpine:3.9 AS builder

#ENV WATCHMAN_VERSION=2023.01.09.00
ENV WATCHMAN_VERSION=4.9.0
# Step 1: Install watchman runtime dependencies:
RUN apk update && apk upgrade && apk add --no-cache \
  g++ \
  gcc \
  make  \
  musl-dev \
  openssl-dev \
  python-dev \
  git \
  curl \
  wget \
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

RUN git clone https://github.com/facebook/watchman.git
WORKDIR /watchman

RUN git checkout v$WATCHMAN_VERSION
RUN ./autogen.sh \
  && ./configure --enable-lenient \
  && make \
  && make install


FROM node:16.19-alpine
LABEL maintainer="Patrick LUZOLO"

RUN apk update && apk add --no-cache sudo bash git android-tools

# Copy the compiled executable:
COPY --from=builder /usr/local/bin/watchman* /usr/local/bin/
#COPY --from=builder /usr/local/lib/python2.7 /usr/local/lib/python2.7/
# Copy the runtime directories:
COPY --from=builder /usr/local/var/run/watchman /usr/local/var/run/watchman
# Copy the documentation:
COPY --from=builder /usr/local/share/doc/watchman-4.9.0 /usr/local/share/doc/watchman-4.9.0

RUN echo "node ALL=NOPASSWD: /usr/local/bin/npm,/usr/local/bin/yarn" > /etc/sudoers.d/node

USER node

# Expo server address = Private ip address
ARG REACT_NATIVE_PACKAGER_HOSTNAME=${REACT_NATIVE_PACKAGER_HOSTNAME}
#ENV REACT_NATIVE_PACKAGER_HOSTNAME=${REACT_NATIVE_PACKAGER_HOSTNAME}
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
#ENV ADB_IP=192.168.1.90

RUN echo "export REACT_NATIVE_PACKAGER_HOSTNAME=$REACT_NATIVE_PACKAGER_HOSTNAME" >> $HOME/.bashrc && source $HOME/.bashrc

#RUN sudo npm install --global --unsafe-perm react-native-cli create-react-native-app expo-cli \
#  && sudo npm cache clean --force

# Install eslint typescript expo
RUN sudo yarn global add eslint typescript react-native-cli create-react-native-app expo-cli @expo/ngrok npm@latest
RUN sudo npm cache clean --force  && sudo yarn cache clean

# Init for VS Code
WORKDIR /workspace
RUN mkdir -p /home/node/.vscode-server 

EXPOSE 8081
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

CMD sleep infinity
