cd ..
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/moliyu/zplugin.git master:gh-pages