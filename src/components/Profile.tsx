type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine: boolean;
};

function Profile({ name, email, isActive, singleLine }: ProfileProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: singleLine ? "row" : "column",
        border: "1px dotted black",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <div>
        <p>{isActive ? "Active" : "Not Active"}</p>
      </div>
    </div>
  );
}

export default Profile;
