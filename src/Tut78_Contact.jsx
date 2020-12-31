import React,{useState} from "react";

const Contact = () => {
  const[data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inpEvnt = (e) => {
    // accessing the name & value
    const {name, value} = e.target;
    setData((prevdata) => {
      return { ...prevdata, [name]: value };
    });
  };

  const formSubmit=(e)=>{
      e.preventDefault();
      setData({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
      });
      alert(`My Name is ${data.fullname}. My Mobile Number is ${data.phone} and my Mail-ID is ${data.email}, Here is what i want to say ${data.msg}.`);
  }

  return (
    <>
    <section className="contact_container">
      <div className="my-3">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="row">
        {/* col-md-6 on desktop & col-10 on mobile */}
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                //   name attribute is important
                name="fullname"
                value={data.fullname}
                onChange={inpEvnt}
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={inpEvnt}
                placeholder="Mobile number"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={inpEvnt}
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="msg"
                value={data.msg}
                onChange={inpEvnt}
              ></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;
