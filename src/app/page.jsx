"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useSession } from "next-auth/react";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import { Button } from 'primereact/button';

export default function Home() {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    students: [{ level: "" }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStudentLevelChange = (index, value) => {
    const newStudents = [...formData.students];
    newStudents[index].level = value;
    setFormData({ ...formData, students: newStudents });
  };

  const addStudent = () => {
    setFormData({
      ...formData,
      students: [...formData.students, { level: "" }],
    });
  };

  const removeStudent = (index) => {
    const newStudents = [...formData.students];
    newStudents.splice(index, 1);
    setFormData({ ...formData, students: newStudents });
  };

  const [selectedLevel, setSelectedLevel] = useState(null);
  const groupedSubjectLevels = [
    {
      label: "Primary",
      items: [
        { label: "Primary 1 (P1) / Pri 1", value: "P1" },
        { label: "Primary 2 (P2) / Pri 2", value: "P2" },
        { label: "Primary 3 (P3) / Pri 3", value: "P3" },
        { label: "Primary 4 (P4) / Pri 4", value: "P4" },
        { label: "Primary 5 (P5) / Pri 5", value: "P5" },
        { label: "Primary 6 (P6) / Pri 6", value: "P6" },
      ],
    },
    {
      label: "Lower Secondary",
      items: [
        { label: "Sec 1 Express / S1", value: "S1" },
        { label: "Sec 1 NA (Normal Academic) / S1 NA", value: "S1NA" },
        { label: "Sec 1 NT (Normal Technical) / S1 NT", value: "S1NT" },
        { label: "Sec 1 IP (Integrated Programme)/ S1 IP", value: "S1IP" },
        { label: "Sec 2 Express / S2", value: "S2" },
        { label: "Sec 2 NA (Normal Academic) / S2 NA", value: "S2NA" },
        { label: "Sec 2 NT (Normal Technical) / S2 NT", value: "S2NT" },
        { label: "Sec 2 IP (Integrated Programme)/ S2 IP", value: "S2IP" },
      ],
    },
    {
      label: "Upper Secondary",
      items: [
        { label: "Sec 3 Express / S3", value: "S3" },
        { label: "Sec 3 NA (Normal Academic) / S3 NA", value: "S3NA" },
        { label: "Sec 3 NT (Normal Technical) / S3 NT", value: "S3NT" },
        { label: "Sec 3 IP (Integrated Programme)/ S3 IP", value: "S3IP" },
        { label: "Sec 4 Express / S4", value: "S4" },
        { label: "Sec 4 NA (Normal Academic) / S4 NA", value: "S4NA" },
        { label: "Sec 4 NT (Normal Technical) / S4 NT", value: "S4NT" },
        { label: "Sec 4 IP (Integrated Programme)/ S4 IP", value: "S4IP" },
        { label: "Sec 5 NA (Normal Academic) / S5 NA", value: "S5NA" },
        { label: "Sec 5 NT (Normal Technical) / S5 NT", value: "S5NT" },
      ],
    },
  ];

  const groupedItemTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div className={styles.itemLabel}>{option.label}</div>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const header = (
    <div className={styles.headerCard}>
      <h1>Request for a Tutor</h1>
    </div>
  );

  return (
    <div className="pageContainer">
      <div className={styles.imageContainer}>
        <Image
          src="/imagestock2.jpg"
          alt="Descriptive Alt Text"
          layout="responsive"
          width={612}
          height={345}
          priority
          objectFit="cover"
        />
      </div>
      <div className={styles.preamble}>
        <div className={styles.preambleContent}>
          <h1>Singapore’s #1 Established Home Tuition Agency</h1>
          <br />
          <p>
            Here at Ace Home Tuition, we take your education and academic
            success seriously. We are an experienced, committed and responsible
            tuition agency, trust us to help you
          </p>
        </div>
        <Card className={styles.requestTutorCard} header={header}>
          <form>
            <div className={styles.contentCard}>
              <div className={styles.row}>
                <div className={styles.inputContainer}>
                  <h3>Name</h3>
                  <InputText
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.inputContainer}>
                  <h3>Mobile</h3>
                  <InputText
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className={styles.input}
                    onWheel={(e) => e.target.blur()}
                    required
                  />
                </div>
              </div>
              {formData.students.map((student, index) => (
                <div key={index} className={styles.inputContainer1}>
                  <h3>Student {index + 1}'s Level / Grade</h3>
                  <Dropdown
                    value={student.level}
                    onChange={(e) => handleStudentLevelChange(index, e.value)}
                    options={groupedSubjectLevels}
                    optionLabel="label"
                    optionGroupLabel="label"
                    optionGroupChildren="items"
                    optionGroupTemplate={groupedItemTemplate}
                    className={styles.input}
                    placeholder="--Please Select--"
                  />
                  {index > 0 && (
                    <Button
                      type="button"
                      onClick={() => removeStudent(index)}
                      className={styles.removeStudentButton}
                    >
                      - Remove Student
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={addStudent}
                className={styles.addStudentButton}
              >
                + Add Another Student
              </Button>
            </div>
            <h3>- Request Now, Decide Later, No Obligations!</h3>
            <h3>- Receive A Good List of Tutor Profiles ASAP </h3>
            <h3>- Experienced, Committed & Professional Tutors</h3>
            <Button type="submit" onClick={handleSubmit} className={styles.submitButton}>FIND ME A TUTOR</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
