import { QueryClient, useQuery } from "react-query";

export default function LabelList() {
  const {data,error,isLoading} = useQuery(["labels"], () => {
    return fetch("https://ui.dev/api/courses/react-query/labels").then((res) =>
      res.json()
    );
  });
console.log('data',data);


  return (
    <h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.map((label) => {
            <li key={label.id}>
              {label.name} style={{color:label.color}}
            </li>;
          })}
        </>
      )}
    </h3>
  );
}
