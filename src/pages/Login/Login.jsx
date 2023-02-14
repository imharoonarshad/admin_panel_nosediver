import React from "react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { async } from "@firebase/util";
function Login() {
  // const navigate = useNavigate();
  // const { register, handleSubmit, formState: { errors } } = useForm({
  //     resolver: yupResolver(Schemasignin),
  // });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        let [email, password] = [e.target[0].value, e.target[1].value];
        try {
          const user = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <div
        style={{
          backgroundColor: "#39415F",
          height: "100vh",
          width: "100%",
          display: "flex",
          gap: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            height: "550px",
            width: "30%",
            gap:"20px",
            backgroundColor: "white",
            borderRadius: "25px",
            padding: "10px",
          }}
        >
          <h2 style={{ marginTop: "20px", fontFamily:"sans-serif", fontSize:"20px", marginBottom:"20px" }}>NoseDiver Admin Panel Login</h2>

          <input
            style={{
            padding:"10px",
              margin: "10px",
              width:"300px",
              backgroundColor:"lightgray",
              borderRadius:"300px",

            }}
            placeholder="Enter E-mail"
            label="E-mail"
            name="email"
            type="email"
            autoComplete="current-email"
          />
          <input
            style={{
              backgroundColor:"lightgray",
              padding:"10px",
              margin: "10px",
              width:"300px",
              borderRadius:"300px",
              
            }}
            placeholder="Enter Password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />

          <button
            style={{
              display:"flex",
              fontFamily:"sans-serif",
              alignItems:"center",
              justifyContent:"center",
              backgroundColor: "lightgreen",
              borderRadius:"300px",
              color: "black",
              padding:" 14px 20px",
              margin: "8px 0",
              border: "none",
              cursor: "pointer",
              width: "30%",

            }}
            type="submit"
            variant="contained"
            color="success"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;


