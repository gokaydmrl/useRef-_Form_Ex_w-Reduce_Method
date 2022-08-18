import { useRef, useState } from "react";

const Norender = () => {
  console.log("Norender rendered");

  const [arr, setArr] = useState([]);

  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    // we create the array of elements within the form element
    const elementArray = [...formRef?.current?.elements];
    // we access the inputs by filtering elements according to their type attribute
    const inputArray = elementArray?.filter((i) => {
      return i?.type === "text";
    });
    console.log("yeni", inputArray);

    /// for loop method is controlling whether the value of the inputs are empty. if empty it returns early and alerts.
    // since it is a loop, it returns early even if one value equals to empty string
    for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i].value === "") {
        alert("please answer all the inputs");
        return;
      }
    }
    /// if there is not any empty string as a value of any input, it continues.

    // the inputs are in the array (filter method returns an array), so we reduce this array to a single value
    // by adding an empty object at the last, we tell the method that it is initial value.
    const newObject = inputArray.reduce((prev, curr) => {
      return { ...prev, [curr.name]: curr.value };
    }, {});
    console.log("this newObject:", newObject);
    setArr((arr) => [...arr, newObject]);
  };

  return (
    <div className="App">
      <h2>useRef Form Example </h2>
      <form ref={formRef}>
        <label>name </label>
        <input type="text" name="name" placeholder={"enter your name"} />
        <label>surname </label>
        <input type="text" name="surname" placeholder={"enter your surname"} />
        <button onClick={handleSubmit}>submit</button>
      </form>
      {arr.length === 0
        ? "no fullname entered yet"
        : arr.map((y) => {
            return <ul key={Math.random()}>{JSON.stringify(y)}</ul>;
          })}{" "}
    </div>
  );
};

export default Norender;
