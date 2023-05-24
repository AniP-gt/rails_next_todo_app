# Rails & Next & Typescript TodoApp　学習用

## railsプロジェクトを作成する時
```
docker-compose build
docker-compose run --rm backend bundle install
docker-compose run --rm backend bundle exec rails new . --force -d mysql --api
```

## reactプロジェクトを作成する時
```
docker-compose run --rm frontend sh -c "npx create-next-app --typescript"
```
- srcディレクトリをfrontendに移す

## Git管理について

- プロジェクト作成後は`.git`が各ディレクトリにあるので、削除
```
rm -rf backend/.git
rm -rf frontend/.git
git init #ルートディレクトリ
```
- .gitignoreは複数合っても良い（個人的に使いたいものであれば`.git/info/exclude`に記述してもいい）

## git clone後

- docker-compose build
- docker-compose up

## ライブラリの注意
- 以下必須コマンド（routerは6系からガラっと変わるため。現行のプロジェクトでは5系でいいかも）
- docker-compose run --rm frontend sh -c "cd app && yarn add react-router-dom@5"
