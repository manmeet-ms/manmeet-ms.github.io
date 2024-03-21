git status
git add --all
echo "enter commit message"
read MSG
git commit -m "$MSG"
git push -u origin main

