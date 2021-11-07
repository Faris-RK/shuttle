import React, { useState } from "react";

import { Steps, Button, message } from "antd";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: <Content1 />,
  },
  {
    title: "Second",
    content: <Content2 />,
  },
  {
    title: "Last",
    content: <Content3 />,
  },
];

export default function StepsBar() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <button className="select-seat-button" onClick={() => next()}>
            Select Seat
          </button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}
