"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const payload = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.status === 200) {
        const result = await response.json();
        setSuccessMsg("Successfully logged in!");
        localStorage.setItem("authToken", result.token || result.accessToken);
        console.log("Login Success:", result);

        // Redirect after login
        router.push("/");
      } else {
        setErrorMsg("Invalid credentials!");
      }
    } catch (err) {
      setErrorMsg("Network error!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="overlay"></div>
        <img
          src="/log.png"
          alt="Login Image"
        />
      </div>

      <div className="login-right">
        <div className="form-card">
          <div className="text-center mb-4">
            
          </div>

          <h3 className="text-center mb-4">Login</h3>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login
            </button>
          </form>

          <div className="text-center">
            <p className="mb-1">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary">
                Register
              </Link>
            </p>

            <Link href="/forgot-password" className="text-secondary">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          height: 500px;
        }

        /* Left image */
        .login-left {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          
        }

        .login-left img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          // background: linear-gradient(
          //   135deg,
          //   rgba(0, 123, 255, 0.5),
          //   rgba(255, 193, 7, 0.5)
          // );
          z-index: 1;
        }

        /* Right form */
        .login-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          background: #f8f8f8;
        }

        .form-card {
          width: 100%;
          max-width: 400px;
          z-index: 2;
          position: relative;
        }

        @media (max-width: 768px) {
          .login-container {
            flex-direction: column;
          }
          .login-left {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}
