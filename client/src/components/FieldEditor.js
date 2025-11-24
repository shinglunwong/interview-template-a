import React from "react";

const FieldEditor = ({ field, onChange, onRemove }) => {
  const handleLabelChange = (event) => {
    onChange({
      ...field,
      label: event.target.value,
    });
  };

  const handleTypeChange = (event) => {
    onChange({
      ...field,
      type: event.target.value,
    });
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          type="text"
          placeholder="Field label"
          value={field.label || ""}
          onChange={handleLabelChange}
          style={{ flex: 2 }}
        />
        <select value={field.type || "text"} onChange={handleTypeChange} style={{ flex: 1 }}>
          <option value="text">Text</option>
          <option value="number">Number</option>
        </select>
        <button type="button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default FieldEditor;
