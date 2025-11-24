import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchDefaultTemplate, createTemplate } from "../api/templateApi";
import FieldEditor from "../components/FieldEditor";

const TemplatePage = () => {
  const { logout } = useAuth();

  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadTemplate = async () => {
      try {
        const template = await fetchDefaultTemplate();
        setName(template.name || "");
        setFields(template.fields || []);
      } catch (error) {
        setName("");
        setFields([]);
      } finally {
        setLoading(false);
      }
    };

    loadTemplate();
  }, []);

  const handleAddField = () => {
    setFields((prev) => [...prev, { label: "", type: "text" }]);
  };

  const handleUpdateField = (index, updatedField) => {
    setFields((prev) => prev.map((field, i) => (i === index ? updatedField : field)));
  };

  const handleRemoveField = (index) => {
    setFields((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!name.trim()) {
      setMessage("Template name is required.");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      await createTemplate({ name, fields });
      setMessage("Template saved successfully.");
    } catch (error) {
      setMessage("Failed to save template.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading template...</div>;
  }

  return (
    <div style={{ maxWidth: 700, margin: "40px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2>Template Editor</h2>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label>
          Template Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", marginTop: 4 }}
          />
        </label>
      </div>

      <div>
        <h3>Fields</h3>
        {fields.map((field, index) => (
          <FieldEditor
            key={index}
            field={field}
            onChange={(updated) => handleUpdateField(index, updated)}
            onRemove={() => handleRemoveField(index)}
          />
        ))}
        <button type="button" onClick={handleAddField} style={{ marginTop: 8 }}>
          Add Field
        </button>
      </div>

      <div style={{ marginTop: 24 }}>
        <button type="button" onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Template"}
        </button>
        {message && <div style={{ marginTop: 8 }}>{message}</div>}
      </div>
    </div>
  );
};

export default TemplatePage;
