import React, { useState } from "react";

const courses = [
  "Sign Language Learning",
  "French Level A2",
  "Professional Photography – Beginner",
  "Event Planning – Basics",
  "Guitar Training – Basics",
  "Web Designing – CMS Basics",
  "Real Estate Sales – Beginner",
  "Blog Writing – Basics",
  "Interpreter / Translator – Basics",
  "Sales – Beginner",
  "CICC Exam Preparation",
  "Career Development Course",
  "Digital Marketing – Beginner",
  "Graphics Designing – Beginner",
  "NDAEB Basic Theory Exam Preparation",
  "NDAEB Advance Theory Exam Preparation",
  "NDAEB Clinical Practice Evaluation",
  "ESL – Language Training",
  "Food Handling Certificate Course",
  "Reception Skills",
  "Bartending",
  "Makeup Artistry Training",
  "Freight Brokerage",
  "Safety & Compliance",
  "Basic Bookkeeping",
  "Truck Dispatch Training",
  "Basic Security Training & First Aid",
  "Certificate in Adult Education – I",
  "Certificate in Adult Education – II"
];

export default function AdmissionForm() {
  const [step, setStep] = useState(1);
  const [txnId, setTxnId] = useState("");
  const [paid, setPaid] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    age: "",
    gender: "",
    street: "",
    apartment: "",
    city: "",
    province: "",
    postalCode: "",
    country: "Canada",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const step1Valid =
    form.fullName &&
    form.email.includes("@") &&
    form.phone.length >= 10 &&
    form.course &&
    form.age &&
    form.gender;

  const step2Valid =
    form.street && form.city && form.province && form.postalCode && form.document;

  const progress = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-3xl rounded shadow">

        <div className="border-b p-5">
          <h1 className="text-2xl font-bold text-blue-900">
            YK College – Online Admission
          </h1>
          <p className="text-gray-500 text-sm">Academic Session 2026-27</p>
        </div>

        <div className="p-6">

          {/* progress */}
          <div className="w-full h-2 bg-gray-200 rounded mb-8">
            <div
              className="h-2 bg-blue-800"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* ✅ ONE LINE RESPONSIVE STEPS */}
          <div className="grid grid-cols-4 text-center mb-8 text-[10px] sm:text-xs md:text-sm">
            {["Personal", "Documents", "Review", "Payment"].map((s, i) => (
              <div
                key={i}
                className={step >= i + 1 ? "text-blue-800" : "text-gray-400"}
              >
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto rounded-full border flex items-center justify-center ${
                    step >= i + 1 ? "bg-blue-800 text-white" : ""
                  }`}
                >
                  {i + 1}
                </div>

                <p className="mt-1 leading-tight">{s}</p>
              </div>
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <input className="input" name="fullName" placeholder="Full Name" onChange={handleChange} />
              <input className="input" name="email" placeholder="Email" onChange={handleChange} />
              <input className="input" name="phone" placeholder="Phone" onChange={handleChange} />

              <select className="input" name="course" onChange={handleChange}>
                <option value="">Select Course</option>
                {courses.map((c, i) => (
                  <option key={i}>{c}</option>
                ))}
              </select>

              <input className="input" name="age" placeholder="Age" onChange={handleChange} />

              <select className="input" name="gender" onChange={handleChange}>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <button className="btn" disabled={!step1Valid} onClick={() => setStep(2)}>
                Continue
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <input className="input" name="street" placeholder="Street Address" onChange={handleChange} />
              <input className="input" name="city" placeholder="City" onChange={handleChange} />
              <input className="input" name="province" placeholder="Province" onChange={handleChange} />
              <input className="input" name="postalCode" placeholder="Postal Code" onChange={handleChange} />

              <label className="upload">
                Upload Document
                <input type="file" hidden name="document" onChange={handleChange} />
              </label>

              {form.document && <p>{form.document.name}</p>}

              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="btn-outline" onClick={() => setStep(1)}>Back</button>
                <button className="btn" disabled={!step2Valid} onClick={() => setStep(3)}>Continue</button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <p><b>Name:</b> {form.fullName}</p>
              <p><b>Email:</b> {form.email}</p>
              <p><b>Phone:</b> {form.phone}</p>
              <p><b>Course:</b> {form.course}</p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="btn-outline" onClick={() => setStep(2)}>Edit</button>
                <button className="btn" onClick={() => setStep(4)}>Proceed to Payment</button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && !paid && (
            <div className="bg-yellow-50 border border-yellow-400 p-4 rounded text-center">
              <p className="text-lg font-bold text-yellow-800">
                ⚠ Payment Gateway Under Maintenance
              </p>

              <input
                className="input mt-4"
                placeholder="Enter Transaction ID"
                value={txnId}
                onChange={(e) => setTxnId(e.target.value)}
              />

              <button
                className="btn mt-3"
                disabled={!txnId}
                onClick={() => setPaid(true)}
              >
                Confirm Payment
              </button>
            </div>
          )}

          {paid && (
            <div className="bg-green-100 p-4 rounded text-center">
              <p className="text-green-700 font-bold">✅ Payment Successful</p>
              <p>Transaction ID: {txnId}</p>
            </div>
          )}

        </div>

        <style>{`
          .input{width:100%;border:1px solid #ccc;padding:12px;margin-bottom:12px;border-radius:6px;}
          .btn{background:#1e40af;color:white;padding:12px;border-radius:6px;width:100%;}
          .btn-outline{border:1px solid #1e40af;color:#1e40af;padding:12px;border-radius:6px;width:100%;}
          .upload{border:1px dashed #ccc;padding:12px;border-radius:6px;display:block;text-align:center;cursor:pointer;}
        `}</style>

      </div>
    </div>
  );
}
