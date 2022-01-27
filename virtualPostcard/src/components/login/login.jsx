import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToSave = (userId) => {
    navigate("/saved", { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent) // provider name
      .then((data) => goToSave(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToSave(user.id); // no user = null
    });
  });

  return (
    <section className={styles.login}>
      <ul className={styles.ul}>
        <li className={styles.title}>login</li>
        <li className={styles.li}>
          <button className={styles.btn} onClick={onLogin}>
            Google
          </button>
        </li>
        <li className={styles.li}>
          <button className={styles.btn} onClick={onLogin}>
            Github
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
