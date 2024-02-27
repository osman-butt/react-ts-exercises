import { BaseProps } from "../types";
import { FormEvent } from "react";
import { User } from "../data/data";
// import { useRef } from "react";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const emailRef = useRef<HTMLInputElement>(null);
  // const isActiveRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Read form inputs and submit the form to the parent
    //onSubmitUser(newUser);

    // Using refs
    // onSubmitUser({
    //   name: nameRef.current!.value,
    //   email: emailRef.current!.value,
    //   isActive: isActiveRef.current!.checked,
    // });

    // formdata
    const form = e.target as HTMLFormElement;
    const formEntries = Object.fromEntries(new FormData(form));
    const newUser = {
      name: formEntries.name as string,
      email: formEntries.email as string,
      isActive: formEntries.isActive === "on",
    };
    onSubmitUser(newUser);
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name:
        <input
          // ref={nameRef}
          name="name"
        />{" "}
        <br />
        Email:
        <input
          // ref={emailRef}
          name="email"
        />{" "}
        <br />
        Active:
        <input
          // ref={isActiveRef}
          type="checkbox"
          name="isActive"
        />{" "}
        <br />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
