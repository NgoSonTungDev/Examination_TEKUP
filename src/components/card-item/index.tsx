interface IProp {
  img: string;
  title: string;
}

const CardItem = (data: IProp) => {
  return (
    <div
      className={`relative w-[full] h-[407px] bg-no-repeat bg-cover shadow-md hover:shadow-lg cursor-pointer `}
      style={{
        backgroundImage: `url(${data.img})`,
      }}
    >
      <div
        className="bg-white absolute w-[90%] p-4 bottom-2 flex justify-between rounded "
        style={{
          left: "50%",
          transform: "translateX(-50%) ",
        }}
      >
        <strong>{data.title}</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          id="arrow-forward-ios"
        >
          <path fill="none" d="M24 24H0V0h24v24z" opacity=".87"></path>
          <path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CardItem;
