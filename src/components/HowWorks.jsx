// import QR from "../assets/HowWork/QR.svg";
// import ticket from "../assets/HowWork/ticket.svg";
// import polygon from "../assets/HowWork/polygon.svg";

const data = [
  {
    // icon: ticket,
    title: "Create Your Event",
    desc: "Enter your event details and generate a claimable QR code (ccode) in minutes.",
  },
  {
    // icon: QR,
    title: "Share QR Code",
    desc: "The end users can claim the NFT tickets by scanning the QR code. We support Enjin wallet to pay and receive the tickets in real-time.",
  },
  {
    // icon: polygon,
    title: "Get Paid",
    desc: "Receive POL instantly in your ccode wallet as your audience claims the NFT tickets. It’s that simple.",
  },
];

export default function HowWork() {
  return (
    <section
      className="w-full px-6 py-16 md:py-20 relative z-10"
      id="how-it-works"
    >
      <div className="max-w-[1280px] md:p-6 mx-auto w-full rounded-xl md:border border-[#231F21]">
        <h2
          className="mt-3 text-center text-2xl md:text-4xl font-medium mb-10 !font-poppins"
          style={{
            background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          How it Works
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((itm, idx) => (
            <div
              key={idx + 1}
              className={`px-8 py-8 w-full relative overflow-hidden rounded-lg text-center bg-[#141414] border ${idx === 0 ? "border-primary" : "border-[#FFFFFF14]"}`}
            >
              <div className="relative z-30">
                <img
                  src={itm.icon}
                  className="mx-auto d-block mb-5 w-12"
                />

                <p className="text-xl md:text-2xl mb-2.5 font-semibold">{itm.title}</p>
                <div className="max-w-[300px] mx-auto">
                  <p className="mb-4">{itm.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
