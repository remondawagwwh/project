# Tell ME
![image](img1.jpg)
## Remove Files Locally and Remotely

### 1. Remove files locally:
```bash
git rm page1.html script.js style.css
git commit -m "Remove unnecessary files"


#2. Remove files remotly:
git push origin master 


#3. Tell me how to checkout another branch without commit changes 
git stash
git checkout branch-name
#Force checkout and discard changes
git checkout -f branch-name
 

#4-List all tags
git tag


# 5- to delete tag locally and remotely.

## Delete a tag locally
git tag -d tag-name

## Delete a tag remotely
git push origin --delete tag-name
git push origin  :tag-name


