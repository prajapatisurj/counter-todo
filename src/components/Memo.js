import React, { useState, memo } from "react";

// A child component that only re-renders if its props change
const Child = memo(({ count }) => {
  console.log("Child component rendered");
  return <div>Child Count: {count}</div>;
});

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  return (
    <div>
      <h1>React.memo Example</h1>
      <div>
        <button onClick={() => setParentCount(parentCount + 1)}>
          Increment Parent Count
        </button>
        <p>Parent Count: {parentCount}</p>
      </div>
      <div>
        <button onClick={() => setChildCount(childCount + 1)}>
          Increment Child Count
        </button>
        <Child count={childCount} />
      </div>
    </div>
  );
};

export default Parent;
