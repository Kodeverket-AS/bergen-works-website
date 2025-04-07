import FasiliteterCard from "@/components/ui/FasiliteterCard";

export default function Facilities() {
  return (
    <main className="px-6 my-10">
      <div className="mb-10">
        <FasiliteterCard
          imageSrc="/BW_Bygning.png"
          alt={"Image of building"}
          headerText={"Lorem Ipsum"}
          paragraphText={
            "dolor, sit amet consectetur adipisicing elit. Maxime ut excepturi cupiditate! Fugiat. dolor, sit amet consectetur adipisicing elit. Maxime ut excepturi  Maxime ut excepturi tenetur voluptate digni ssimos porro molestias iusto unde perferendis quas obcaecati, blanditiis ut alias rem illo eum vitae numquam eius, fugit, inventore hic. Labore, sunt optio?"
          }
          buttonText={"Ta kontakt"}
          buttonLink={"/"}
          reverse={false}
          cardStyle={""}
          imageContainerStyle={"lg:w-3/5  lg:h-[450]"}
          headerStyle={"text-3xl md:text-4xl xl:text-5xl  "}
          textContainerStyle={"lg:w-2/5 xl:h-[450]"}
          paragraphStyle={"lg:my-4"}
          buttonStyle="bg-moss-600 hover:bg-accept-600 hover:text-[var(--text-dark)] text-[var(--text-light)] "
        />
      </div>

      <div className="mb-10">
        <FasiliteterCard
          imageSrc="/FasImg2.png"
          alt={"Image of Meetingroom"}
          headerText={"Lorem Ipsum"}
          paragraphText={
            "dolor, sit amet consectetur adipisicing elit. Maxime ut excepturi cupiditate! Fugiat. dolor, sit amet consectetur adipisicing elit. Maxime ut excepturi  Maxime ut excepturi tenetur voluptate digni ssimos porro molestias iusto unde perferendis quas obcaecati,"
          }
          buttonText={"Ta kontakt"}
          buttonLink={"/"}
          reverse={true}
          cardStyle={""}
          imageContainerStyle={"lg:w-3/5 h-full xl:h-[400]"}
          headerStyle={"text-2xl md:text-3xl lg:text-4xl  "}
          textContainerStyle={
            "bg-moss-600 text-[var(--text-light)] lg:w-2/5 xl:h-[400]"
          }
          paragraphStyle={"lg:my-5 "}
          buttonStyle="bg-[#fffafa] hover:bg-accept-600 hover:text-[var(--text-dark)] text-[var(--text-dark)] my-3"
        />
      </div>
      <div className="mb-10">
        <FasiliteterCard
          imageSrc={"/FasImg3.png"}
          alt={"Image of kitchen area"}
          headerText={"Lorem ipsum dolor sit amet consectetur"}
          paragraphText={
            "dolor, sit amet consectetur adipisicing elit. Maxime ut excepturi cupiditate! Fugiat. dolor, sit amet consectetur adipisicing elit. Maxime ut excepturi Maxime ut excepturi tenetur voluptate digni ssimos porro molestias iusto unde perferendis quas obcaecati,"
          }
          buttonText={"Ta kontakt"}
          buttonLink={""}
          reverse={false}
          cardStyle={""}
          imageContainerStyle={"lg:w-3/5 h-full lg:h-[500] "}
          headerStyle={"text-2xl md:text-3xl lg:text-4xl "}
          textContainerStyle={"lg:w-2/5 lg:h-[500] "}
          paragraphStyle={"xl:mr-10 lg:my-8"}
          buttonStyle="bg-moss-600 hover:bg-accept-600 hover:text-[var(--text-dark)] text-[var(--text-light)] my-3  "
        />
      </div>
    </main>
  );
}
