"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RadioButton } from "primereact/radiobutton";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
import Enums from "../common/enums/enums";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createUser } from "../api/user/route";

const Register = () => {
  const session = useSession();
  const router = useRouter();
  const toast = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  if (session.status === "loading") {
    return (
      <div className={styles.loadingSession}>
        <ProgressSpinner />
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const { firstName, lastName, email, password, role } = formData;

    if (!firstName) {
      setErrorMessage("Please fill in your first name!");
      return;
    } else if (!email) {
      setErrorMessage("Please fill in your email!");
      return;
    } else if (!password) {
      setErrorMessage("Please fill in your password!");
      return;
    } else if (!role) {
      setErrorMessage("Please select your role!");
      return;
    } else {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: role,
      };

      try {
        setLoading(true);
        const response = await createUser(data);
        if (response.statusCode == 409) {
          setErrorMessage(response.message);
          setLoading(false);
        } else if (response.statusCode == 200) {
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "You have registered successfully!",
            life: 5000,
          });
          router.push("/login?success=Account has been created");
          setLoading(false);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setErrorMessage(error);
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Toast ref={toast} />
      <h1 className={styles.title}>Register</h1>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <p>First Name</p>
          <InputText
            type="text"
            name="firstName"
            className={styles.input}
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Last Name</p>
          <InputText
            type="text"
            name="lastName"
            className={styles.input}
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Email</p>
          <InputText
            type="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <p>Password</p>
          <InputText
            type={showPassword ? "text" : "password"}
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.showPasswordButton}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className={styles.radio}>
          <p>I am a:</p>
          <RadioButton
            inputId={Enums.TUTOR}
            name="role"
            value={Enums.TUTOR}
            onChange={handleInputChange}
            checked={formData.role === Enums.TUTOR}
            required
          />
          <label htmlFor={Enums.TUTOR} className="ml-2">
            Tutor
          </label>
          <RadioButton
            inputId={Enums.TUTEE}
            name="role"
            value={Enums.TUTEE}
            onChange={handleInputChange}
            checked={formData.role === Enums.TUTEE}
            required
          />
          <label htmlFor={Enums.TUTEE} className="ml-2">
            Tutee
          </label>
        </div>
        {loading && (
          <ProgressSpinner style={{ width: "50px", height: "50px" }} />
        )}
        {!loading && (
          <Button className={styles.button} onClick={handleSubmit}>
            Join Kideas
          </Button>
        )}
      </form>
      <div className={styles.signInContainer}>
        <div>
          <p>Already on Kideas?</p>
        </div>
        <Link href="/login" className={styles.signInLink}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Register;
