const user = {
  name: 'Yelnur',
  mager: 'Frontend'
}

type UserKey = keyof typeof user
const key: UserKey = 'name'