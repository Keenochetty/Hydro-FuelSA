import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

export const dataState = atom({
  key: "dataState",
  default: [],
});

function DataAtom() {
  const [dataset, setDataset] = useRecoilState(dataState);

  useEffect(() => {
    console.log("useEffect in app");
    if (dataset.length === 0) {
      fetch("/data/dataHydroJuly22b.json")
        .then((response) => response.json())
        .then((data) => {
          setDataset(data.Sheet1);
          console.log(data);
        })
        .catch((error) => console.log(error))
        .finally(() => console.log("finally"));
    }
  }, [dataset]);

  return <div></div>;
}

export default DataAtom;
