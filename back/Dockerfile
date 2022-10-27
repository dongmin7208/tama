FROM node:16-alpine
#해당경로에서 명령어실시.
WORKDIR /tamastudy/back
# 도커파일의 기준으로 패키지제이슨파일을 ./로 복사한다.
COPY package*.json ./
# 이미지 생성과정에서실행
RUN npm install
#현재경로의 모든파일을 복사
COPY . .
#외부포트 3001과 연결
EXPOSE 3001
CMD ["node","index.js"]