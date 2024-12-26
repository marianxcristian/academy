- Main

---

- 0.0

```
learngitbranching.js.org
```

- 1.1

```
git commit
git commit
```

- 1.2

```
git switch -c bugFix
```

- 1.3

```
git switch -c bugFix
git commit
git switch main
git commit
git merge bugFix
```

- 1.4

```
git switch -c bugFix
git commit
git switch main
git commit
git switch bugFix
git rebase main
```

- 2.1

```
git checkout C4
```

- 2.2

```
git checkout C4^
```

- 2.3

```
git branch -f main C6
git branch -f bugFix C0
git checkout C1
```

- 2.4

```
git reset local~1
git checkout pushed
git revert pushed
```

- 3.1

```
git cherry-ick C3 C4 C7
```

- 3.2

```
git rebase -i main~4
```

- 4.1

```
git switch main
git cherry-pick C4
```

- 4.2

```
git rebase -i HEAD~2
git commit --ammend
git rebase -i HEAD~2
git switch main
git merge caption
```

- 4.3

```
git switch main
git cherry-pick C2
git commit --amend
git cherry-pick C3
```

- 4.4

```
git tag v0 C1
git tag v1 C2
git checkout v1
```

- 4.5

```
git describe main
git commit
```

- 5.1

```
git switch bugFix
git rebase main
git switch side
git rebase bugFix
git switch another
git rebase side
git switch main
git rebase another
```

- 5.2

```
git branch bugWork main~^2~
```

- 5.3

```
git checkout one
git cherry-pick C4 C3 C2
git checkout two
git cherry-pick C5 C4 C3 C2
git checkout three
git merge C2
git checkout two
```

- Remote

---

- 0.0

```
learngitbranching.js.org
```

- 1.1

```
git clone
```

- 1.2

```
git commit
git checkout o/main
git commit
```

- 1.3

```
git fetch
```

- 1.4

```
git pull
```

- 1.5

```
git clone
git fakeTeamwork 2
git commit
git pull
```

- 1.6

```
git commit
git commit
git push
```

- 1.7

```
git clone
git fakeTeamwork
git commit
git pull --rebase
git push
```

- 1.8

```
git switch -c feature
git push
git switch main
git reset --hard o/main
git switch feature
```

- 2.1

```
git fetch
git rebase o/main side1
git rebase side1 side2
git rebase side2 side3
git rebase side3 main
git push
```

- 2.2

```
git switch main
git pull
git merge side1
git merge side2
git merge side3
git push
```

- 2.3

```
git checkout -b side o/main
git commit
git pull --rebase
git push
```

- 2.4

```
git push origin foo
git push origin main
```

- 2.5

```
git push origin main^:foo
git push origin foo:main
```

- 2.6

```
git fetch origin main~1:foo
git fetch origin main:foo
git checkout foo
git merge main
```

- 2.7

```
git push origin :foo
git pull origin :bar
```

- 2.8

```
git pull origin bar:foo
git pull origin main:side
```
