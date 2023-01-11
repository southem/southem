FROM node:16 as build

WORKDIR /usr/app
COPY ./ ./
RUN npm install

RUN npm install --global expo-cli

FROM build as web

WORKDIR /usr/app

RUN npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

CMD [ "npm", "run", "web"]
