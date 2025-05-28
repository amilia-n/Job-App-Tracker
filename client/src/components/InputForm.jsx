import "./InputForm.css";
import { useState } from "react";

function AddForm({ setData }) {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    dateApplied: today,
    jobLink: "",
    notes: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const dateApplied = new Date(e.target.elements.dateApplied.value);
    const followUpDate = new Date(dateApplied);
    followUpDate.setDate(followUpDate.getDate() + 14);

    const newEntry = {
      companyName: e.target.elements.companyName.value,
      jobTitle: e.target.elements.jobTitle.value,
      dateApplied: e.target.elements.dateApplied.value,
      jobLink: e.target.elements.jobLink.value,
      followUpDate: followUpDate.toISOString().split("T")[0],
      status: "Submitted",
      notes: e.target.elements.notes.value,
    };

    setData((prev) => [...prev, newEntry]);
    e.target.reset();

    setFormData({ ...formData, dateApplied: today });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form className="job-app-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          required
        />
        <input type="text" name="jobTitle" placeholder="Job Title" required />
        <input
          type="date"
          name="dateApplied"
          value={formData.dateApplied}
          onChange={handleChange}
        />
        <input type="url" name="jobLink" placeholder="Job Posting Link" />
        <textarea name="notes" placeholder="Notes" rows="3"></textarea>
        <button type="Submit">Add</button>
      </form>
    </div>
  );
}

export default AddForm;
