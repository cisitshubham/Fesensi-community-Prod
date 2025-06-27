"use client"

const Bg = () => {
  return (
    <>
      <style jsx>{`
        .body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-repeat: no-repeat;
          background-attachment: fixed;
          min-height: 100vh;
        }
      `}</style>
      <div className="absolute fill-black w-full z-[-2] gradient-fade dark:invert dark:opacity-30 body">
        {/* <Image
          src={"/bg.svg"}
          alt="bg"
          width={1000}
          height={1000}
          className="w-full bg-cover"
        /> */}
      </div>
    </>
  );
};

export default Bg;
