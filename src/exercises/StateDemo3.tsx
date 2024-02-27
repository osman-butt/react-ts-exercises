import { BaseProps } from "../types";
import { users as usersFromDB, User } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users, setUsers] = useState<User[]>(usersFromDB || []);
  //Derived value. No need for a useState here
  const nextId =
    1 + users.length > 0
      ? users.reduce(
          (max, user) => (user.id && user.id > max ? user.id : max),
          0
        )
      : 0;

  const onSubmitUser = (newUser: User) => {
    newUser.id = nextId;
    //This is the only place you have to change something
    setUsers([...users, newUser]);
    console.log(users);
  };

  return (
    <>
      <h2>{title}</h2>
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
      <UserTable users={users} />
    </>
  );
}
