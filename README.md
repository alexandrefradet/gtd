# GTD - Getting things done

## What ? Why ? How ?
I'm tring to make a easy-to-use, responsive and power-user friendly (ie: custom to me, at first) to use the [Getting Things Done](https://gettingthingsdone.com/) methodology for my personal and professional organization (i'm currently reading the book).

Front will be Angular 8 (probably 9 later)
Backend will be Java 11 with Spring-Boot
At some point i'll dockerize everything.
The aim is also to learn to use gitlab-ci effectively.

Feel free to fork or try it for you !

Credits to [Devstackr Youtube tutorial](https://www.youtube.com/playlist?list=PLIjdNHWULhPR5cr7nkTvq6kTV8rbr6BVz) whose Angular tutorial helped me get started for the frontend as i haven't done much Angular lately.
He also give some nice tips for css (animation, transition, etc...)

## Utils :

- Run postgres database with docker :
```sh
docker run --name gtd-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=gtd -p 5432:5432 -d postgres
```

