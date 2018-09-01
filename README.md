# react-notepad
<p>
  <a href="https://travis-ci.org/Thomazella/star-pairs"><img src="https://img.shields.io/travis/Thomazella/star-pairs/master.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
</p>
<br/>

API
✔✔ fetch stars from username
  ✔✔ reduce stars from repo array
✔ fetch profile pics from username
✔✔ fetch repos from username
✔✔ fetch people from repo issues

UX
- carousel component
- intro slides

https://api.github.com/repos/<USER>/<REPO>
-> REPO {}
.owner.login name
.owner.avatar_url avatar image
.stargazers_count stars
.issues_url

https://api.github.com/users/<USER>
-> USER {}
.repos_url api link
.avatar_url avatar image

https://api.github.com/users/<USER>/repos
-> REPO[]
.stargazers_count stars

https://api.github.com/repos/<USER>/<REPO>/issues?state=all
-> ISSUE {}
.user.login person who created



// find possible matches
(user, depth) -> people
let people be []
let repos be user's repos
let issues be repos[0]'s issues
push issues[0]'s people into people
process as many repos as depth argument
return people

// Is star match
(person, goal) -> bool
let repos be person's repos
map repos to stars
reduce stars to person's total
if total matches goal return true
return false
