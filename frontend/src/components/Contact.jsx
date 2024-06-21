import React from "react";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "10ec8ad0-c8d0-40b3-93cc-b21329d6d5b9");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="lg:text-4xl text-xl font-bold">Contact Us</h1>
        <p className="my-5">Share your thoughts to us !</p>

        <div className="my-10 p-5 border-[1px] border-black rounded-lg w-80 lg:w-[425px]">
        <input type="hidden" name="access_key" value="10ec8ad0-c8d0-40b3-93cc-b21329d6d5b9"/>
          <h1 className="lg:text-2xl text-lg font-bold">Contact Us</h1>
          <form onSubmit={onSubmit} className="my-8">
            <h3>Enter Email: </h3>
            <input
            name="email"
            type="text"
            required
            className="px-2 py-3 w-full lg:w-96 border-2 outline-[#00ED64] rounded-sm my-2"
            placeholder="Enter Email: "
          />

            <h3>Enter Message: </h3>
            <textarea
            name="message"
            required
            type="text"
            className="px-2 py-3 w-full lg:w-96 border-2 outline-[#00ED64] rounded-sm my-2"
            placeholder="Enter Message: "
          />
          <input type="submit" 
          className="mt-3 bg-[#00ED64] w-full text-center py-2 rounded-md text-white font-bold cursor-pointer"
          />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
