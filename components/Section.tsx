const Section = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="text-center mx-auto leading-6 md:leading-10 my-2 md:my-4 max-w-[500px] w-[70%]">
      <h2 className="text-3xl md:text-4xl capitalize font-bold mb-2">
        {title}
      </h2>
      <p className="text-slate-400 font-light text-xl">{desc}</p>
    </div>
  );
};

export default Section;
