import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstnace";

function BookingForm() {
  const [form, setForm] = useState({
    tourId: "",
    blockDate: "",
    blockTime: "",
    adultPassengers: 0,
    kidPassengers: 0,
  });

  const [tours, setTours] = useState([]);
  const [blockedDates, setBlockedDates] = useState([]);
  const [blockedTimes, setBlockedTimes] = useState([]);
  const [disabledTimes, setDisabledTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const timeSlots = ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"];

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [toursRes, blockDatesRes, blockTimesRes] = await Promise.all([
          axiosInstance.get("/tours"),
          axiosInstance.get("/block-date"),
          axiosInstance.get("/block-time"),
        ]);
        // console.log('Blocked Dates:', toursRes.data); 
        setTours(toursRes.data.data);
        setBlockedDates(blockDatesRes.data);
        setBlockedTimes(blockTimesRes.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    
    // Check if selected date is blocked
    const isBlocked =
      blockedDates &&
      blockedDates.some(
        (bd) =>
          new Date(bd.blockDate).toDateString() === new Date(selectedDate).toDateString() && bd.isActive
      );
  
    if (isBlocked) {
      // Alert immediately if the date is blocked
      alert("This tour date is blocked. Please choose another date.");
      setForm((prev) => ({ ...prev, blockDate: "" })); // Clear selected date immediately
      setDisabledTimes([]); // Clear disabled time slots
      return;
    }
  
    // If not blocked, update the form with the selected date
    setForm((prev) => ({ ...prev, blockDate: selectedDate }));
  
    // Get the disabled time slots for the selected date
    const blocked = (blockedTimes || []) // Ensure blockedTimes is an array before calling .filter()
      .filter(
        (bt) =>
          new Date(bt.blockDate).toDateString() === new Date(selectedDate).toDateString() && bt.isActive
      )
      .map((bt) => bt.blockTime) || [];
  
    setDisabledTimes(blocked); // Update disabled times
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/bookings/book-tour", form);
      alert(response.data.message);
    setForm({
        tourId: "",
        blockDate: "",
        blockTime: "",
        adultPassengers: 0,
        kidPassengers: 0,
      });
      setDisabledTimes([]); 
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Error booking tour");
    }
  };

  return (
    <div className="booking-wrapper">
      <div className="container-lg">
        <div className="tour-inner">
          <form onSubmit={handleSubmit}>
            <div className="row g-0">
              <div className="col-sm-10">
                <div className="row g-0">
                  {/* Tour Select */}
                  <div className="col form-floating">
                    <select
                      className="form-control"
                      value={form.tourId}
                      onChange={(e) => setForm({ ...form, tourId: e.target.value })}
                      required
                    >
                      <option value="">Select Tour</option>
                      {tours.map((tour) => (
                        <option key={tour._id} value={tour._id}>
                          {tour.selectedCategory?.category || "Unnamed Tour"}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="tour">Tour</label>
                  </div>

                  {/* Date Select */}
                  <div className="col form-floating">
                    <input
                      type="date"
                      className="form-control"
                      min={new Date().toISOString().split("T")[0]} // 👈 disable past
                      value={form.blockDate}
                      onChange={handleDateChange}
                      required
                    />
                    <label htmlFor="bookdate">Date</label>
                  </div>

                  {/* Time Select */}
                  <div className="col form-floating">
                    <select
                      className="form-control form-select"
                      value={form.blockTime}
                      onChange={(e) => setForm({ ...form, blockTime: e.target.value })}
                      required
                    >
                      <option value="">Choose time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time} disabled={disabledTimes.includes(time)}>
                          {time} {disabledTimes.includes(time) ? "(Unavailable)" : ""}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="booktime">Time</label>
                  </div>

                  {/* Adult */}
                  <div className="col form-floating">
                    <input
                      type="number"
                      min="1"
                      value={1}
                      className="form-control"
                      placeholder="Adult Passengers"
                      onChange={(e) =>
                        setForm({ ...form, adultPassengers: parseInt(e.target.value) || 0 })
                      }
                    />
                    <label htmlFor="adult">Adult ($69/ea.)</label>
                  </div>

                  {/* Kid */}
                  <div className="col form-floating">
                    <input
                      type="number"
                      min="0"
                      value={0}
                      className="form-control"
                      placeholder="Kid Passengers"
                      onChange={(e) =>
                        setForm({ ...form, kidPassengers: parseInt(e.target.value) || 0 })
                      }
                    />
                    <label htmlFor="kids">
                      Kids (12 years and<br /> under - $49/ea.)
                    </label>
                  </div>
                </div>

                {/* <div className="book_as_private">
                  <label className="badge bg-danger shadow-sm rounded-pill fw-normal text-uppercase">
                    Book as a private tour +
                  </label>
                </div> */}
              </div>

              {/* Submit */}
              <div className="col-sm-2">
                <div className="readmore h-100 mt-0">
                  <button className="button rounded-0 w-100 h-100 bg-third">
                    <i className="fa fa-hand-pointer"></i> Book Now
                  </button>
                </div>
              </div>

              {loading && <p>Loading tours...</p>}
              {error && <p className="text-danger">Error: {error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
