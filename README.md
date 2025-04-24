# Tell ME

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
#Force checkout and disca# Git Commands Guide 🛠️

![Git Illustration](img1.jpg) *(Make sure the image exists in your repository)*

---

## 🗑️ Remove Files Locally and Remotely

### 1. Remove files locally:
```bash
git rm file1.html file2.js file3.css
git commit -m "Remove unnecessary files"
```

### 2. Push changes to remove files remotely:
```bash
git push origin main  # or 'master' depending on your primary branch name
```

---

## 🌿 Branch Management

### 3. Switch branches without committing changes:
```bash
git stash           # Temporarily save changes
git checkout branch-name
```

### Force checkout (discards all local changes):
```bash
git checkout -f branch-name
```

---

## 🏷️ Tag Management

### 4. List all tags:
```bash
git tag
```

### 5. Delete tags locally and remotely:
```bash
# Delete locally:
git tag -d tag-name

# Delete remotely (two methods):
git push origin --delete tag-name
# or
git push origin :tag-name
```

---

### Important Notes:
- Replace `branch-name` with your actual branch name
- Replace `tag-name` with your actual tag name
- `origin` is the default remote name (change if different)
- The illustration requires `img1.jpg` in the same directory

### Additional Tips:
- Use `git stash pop` to restore stashed changes
- Add `-a` flag to `git tag` to show all tags (including annotated ones)
- Use `git push --tags` to push all tags at oncerd changes
git checkout -f branch-name
---
# 4-List all tags
```bash
git tag
```

# 5- to delete tag locally and remotely.

```bash
### Delete a tag locally
git tag -d tag-name

## Delete a tag remotely
git push origin --delete tag-name
git push origin  :tag-name
```
![image](img1.jpg)