import React from "react";

function Header() {
  return (
    <div
      style={{
        width: "100%",
        padding: "16px 32px",
        background: "#1F1F1F",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <img
          style={{ width: "32px", height: "31.42px" }}
          src="https://via.placeholder.com/32x31"
          alt="Logo"
        />
        <div
          style={{
            color: "white",
            fontSize: "28px",
            fontFamily: "General Sans",
            fontStyle: "italic",
            fontWeight: 600,
            textTransform: "lowercase",
          }}
        >
          Uptech
        </div>
      </div>
      <div style={{ display: "flex", gap: "32px" }}>
        <div
          style={{
            opacity: 0.8,
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Home
        </div>
        <div
          style={{
            opacity: 0.8,
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Catalogue
        </div>
        <div
          style={{
            opacity: 0.8,
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Collections
        </div>
        <div
          style={{
            opacity: 0.8,
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Popular
        </div>
        <div
          style={{
            opacity: 0.8,
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Contacts
        </div>
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="https://via.placeholder.com/19x19" alt="Icon" />
        </div>
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        ></div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="https://via.placeholder.com/20x16" alt="Cart Icon" />
            </div>
            <div
              style={{
                background: "#EF233C",
                borderRadius: "50%",
                width: "12px",
                height: "12px",
              }}
            ></div>
            <div style={{ color: "white", fontSize: "9px", fontWeight: 700 }}>
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
