import React from "react";
export default function Plant({ name, sun_exposure, lifespan }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{sun_exposure}</h2>
      <h3>{lifespan}</h3>
    </div>
  );
}
