export interface UserProps {
  id: string
  firstlastName: string
  age: string
  jobTitle: string
}

export interface UsersProps {
  users: UserProps[]
}
