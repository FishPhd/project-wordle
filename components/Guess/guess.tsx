type GuessProps = {
  value?: string;
  status?: string;
};

export default function Guess(props: GuessProps) {
  let bgColor = "bg-white";

  if (props.status == "correct") {
    bgColor = "bg-green-500";
  } else if (props.status == "misplaced") {
    bgColor = "bg-yellow-500";
  } else if (props.status == "incorrect") {
    bgColor = "bg-gray-400";
  }

  return (
    <div className={`border-2 border-black m-2 ${bgColor}`}>
      <span
        style={{
          width: "100px",
          height: "100px",
        }}
        className={`font-bold flex items-center justify-center`}
      >
        {props.value}
      </span>
    </div>
  );
}
