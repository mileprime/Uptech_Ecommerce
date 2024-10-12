import React from "react";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "80px",
        paddingLeft: "96px",
        paddingRight: "96px",
        background: "#1F1F1F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
      }}
    >
      <div
        style={{
          width: "1248px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "General Sans",
              fontWeight: 500,
              lineHeight: "50px",
            }}
          >
            Stay Updated on Latest Product Releases
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <div
              style={{
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingTop: "14px",
                paddingBottom: "14px",
                background: "#292929",
                borderRadius: "46px",
                border: "1px solid #3D3D3D",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  opacity: 0.8,
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "General Sans",
                  fontWeight: 300,
                }}
              >
                Enter your email
              </div>
            </div>
            <div
              style={{
                width: "149px",
                paddingLeft: "32px",
                paddingRight: "32px",
                paddingTop: "16px",
                paddingBottom: "16px",
                background: "#3D3D3D",
                borderRadius: "44px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "General Sans",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                Subscribe
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "80px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div style={{ color: "white", fontSize: "20px", fontWeight: 500 }}>
              Pages
            </div>
            <div
              style={{
                opacity: 0.6,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                About Us
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Categories
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Catalogue
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Testimonials
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Articles & Blogs
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div style={{ color: "white", fontSize: "20px", fontWeight: 500 }}>
              Support
            </div>
            <div
              style={{
                opacity: 0.6,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                FAQs
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Product
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Contact
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Privacy Policy
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Terms & Conditions
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div style={{ color: "white", fontSize: "20px", fontWeight: 500 }}>
              Social Media
            </div>
            <div
              style={{
                opacity: 0.6,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Linkedin
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Twitter
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Instagram
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Facebook
              </div>
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Pinterest
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
