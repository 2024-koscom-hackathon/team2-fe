FROM node:16
# 경로 설정
WORKDIR /app
# package.json 워킹 디렉토리(.)에 복사
COPY package.json .
RUN npm install
# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사
COPY . .

# 3000번 포트 노출
EXPOSE 3000

# npm start 스크립트 실행
CMD ["npm", "start"]

# $ docker build .