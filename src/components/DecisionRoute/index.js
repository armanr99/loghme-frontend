import React from "react";
import { Route } from "react-router-dom";

export default function DecisionRoute({
  trueComponent: TrueComponent,
  falseComponent: FalseComponent,
  condition,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        condition === true ? (
          <TrueComponent {...props} />
        ) : (
          <FalseComponent {...props} />
        )
      }
    />
  );
}
