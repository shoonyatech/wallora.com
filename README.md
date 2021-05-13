# wallora.com

Wallora webapp recreated using React

# Contributors

- Souvik Basu (@souvikbasu)
- Victor Rajkumar (@vctc)
- Priyanka Jayaswal (@priyankajayaswal1)
- Aryaman Todkar (@aryamantodkar)
- Mohammed Hussam Khatib (@hussamkhatib)

# Getting Started

## To fork the repo

- Go to https://github.com/shoonyatech/wallora.com
- Click on Fork button in top right
- This will fork the repo into your profile in GitHub

## To get the code in your localhost

- Go to the forked repo in your profile
- Click Code button and copy the git url from your repo. You may use SSH if you have SSH keys added to settings or use HTTPS
- If you have not added SSH keys to your GitHub settings, please follow [this article](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
- Open command prompt and run the following to fetch the code into your local box

```
git clone <your git url>
```

- Create a reference to the upstream repo to be able to create Pull Requests

```
git remote add upstream git@github.com:shoonyatech/wallora.com.git
```

## To run the project

- For the first time install npm packages

```
cd wallora.com
npm install
```

- Run the dev server

```
npm run dev
```

## To create a commit and raise a Pull Request (PR)

- Save your changes and create a local commit
- Use the following format for commit messages

```
doc|feat|fix|build(<page name>): <one liner of what is done in present tense>
```

e.g.

```
feat(home): add Header component
```

- Pull latest from upstream and rebase

```
git pull upstream main --rebase
```

- Resolve any merge conflicts
- Force push changes to your repo

```
git push origin main -f
```

- Go to your GitHub repo page and click on Create Pull Request button. This will create a PR from your repo to upstream repo
- One of the project moderators will review and approve your PR. They will ask for any changes if needed
