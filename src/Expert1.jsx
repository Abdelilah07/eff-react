import expertsData from "./data";
import Expert from "./Expert";

function Expert1() {

  return (
    <>
      <ul className="p-4">
        {expertsData.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </ul>
    </>
  )
}

export default Expert1
