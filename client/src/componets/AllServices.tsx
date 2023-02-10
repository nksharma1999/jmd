import { useEffect } from "react";

interface props {
  changeHomePage: (element: boolean) => void;
}
export const AllServices = ({ changeHomePage }: props) => {
  useEffect(() => {
    changeHomePage(true);
  });
  return (
    <div className="container-fluid container-fluid-new">
      <h1>AllServices</h1>
    </div>
  );
};
