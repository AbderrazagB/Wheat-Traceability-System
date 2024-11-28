import { useEffect, useRef } from "react";

const Transporters = ({ formData, setFormData, state = null, indexes = null }) => {
  const containerRef = useRef(null);
  const tunisianStates = [
    "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Beja", "Jendouba", "Kef",
    "Siliana", "Sousse", "Monastir", "Mahdia", "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid", "Gabes", "Medenine",
    "Tataouine", "Gafsa", "Tozeur", "Kebili"
];
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  useEffect(() => {
    if (state !== null && indexes !== null && containerRef.current) {
      if (indexes.indexOf(state) === -1) {
        const inputElements = containerRef.current.querySelectorAll('input');
        inputElements.forEach(input => {
          input.disabled = true;
        });
      } else {
        const inputElements = containerRef.current.querySelectorAll('input');
        inputElements.forEach(input => {
          input.disabled = false;
        });
      }
    }
  }, [indexes, state]);

  return (
    <div className="mb-1 row transporter-form" ref={containerRef}>
      <div className="mb-3 col-md-6">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="fullName" className="form-label">Full Name:</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="address" className="form-label">Ethereum Address:</label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          pattern="^0x[a-fA-F0-9]{40}$"
          required
        />
        <small className="text-muted">
          Must start with '0x' followed by 40 hexadecimal characters (0-9, a-f).
        </small>
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="licensePlate" className="form-label">License Plate:</label>
        <input
          type="text"
          className="form-control"
          id="licensePlate"
          value={formData.licensePlate}
          onChange={handleInputChange}
          pattern="\d+\sTunis\s\d+"
          title="Please enter license plate in the format: number Tunisia number"
          required
        />
        <small className="text-muted">
          Format: number Tunis number (e.g., 1234 Tunis 56)
        </small>
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="number" className="form-label">Phone Number:</label>
        <input
          type="text"
          className="form-control"
          id="number"
          value={formData.number}
          onChange={handleInputChange}
          pattern="[0-9]{8}"
          required
        />
        <small className="form-text text-muted">Must contain 8 digits</small>
        <div className="invalid-feedback">Phone number must be exactly 8 digits</div>
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="stateSelect" className="form-label">Select State:</label>
        <select
            id="location"
            className="form-select"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
        >
            <option value="">Select State</option>
            {tunisianStates.map((state) => (
                <option key={state} value={state}>{state}</option>
            ))}
        </select>
    </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="capacity" className="form-label">Car Capacity in Kg:</label>
        <input
          type="number"
          className="form-control"
          id="capacity"
          value={formData.capacity}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
}

export default Transporters;
