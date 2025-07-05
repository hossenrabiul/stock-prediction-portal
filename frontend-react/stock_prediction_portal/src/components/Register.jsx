import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      username,
      email,
      password,
    };
    // console.log(userData)

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/vi/register/",
        userData
      );
      setErrors({});
      console.log(response.data);
    } catch (error) {
      setErrors(error.response.data);
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }

    console.log(errors);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-color p-5 rounded ">
          <h1 className="text-light text-center mb-4">Create Your Account</h1>
          <form onSubmit={handleRegistration}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control "
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <small>
                {errors.username && (
                  <h6 className="text-danger mt-2">{errors.username}</h6>
                )}
              </small>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small>
                {errors.email && (
                  <h6 className="text-danger mt-2">{errors.email}</h6>
                )}
              </small>
            </div>
            <div className="mb-5">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small>
                {errors.password && (
                  <h6 className="text-danger mt-2">{errors.password}</h6>
                )}
              </small>
            </div>
            {loading ? (
              <button
                className="d-block mx-auto btn btn-outline-info disabled"
                type="submit"
              >
                <FontAwesomeIcon icon={faSpinner} spin/>
                Please Wait
              </button>
            ) : (
              <button
                className="d-block mx-auto btn btn-outline-info"
                type="submit"
              >
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
