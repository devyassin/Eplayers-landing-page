import { SelectedPage, ClassType } from "@/shared/Types";
import image1 from "@/assets/pic4.webp";
import image2 from "@/assets/pic2.png";
import image3 from "@/assets/pic3.jpeg";
import image4 from "@/assets/pic5.jpg";
import image5 from "@/assets/pic6.webp";
import image6 from "@/assets/pic9.webp";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Morocco vs Portugal",
    description:
      "An unstoppable run to Himalayan heights to get ahead of Diogo Costa and Ruben Dias, followed by an unstoppable header. In the 42nd minute on Saturday, Youssef En-Nesyri scored the historic goal that enabled Morocco to eliminate Portugal (1-0) and qualify for the semi-finals of the 2022 World Cup.",
    image: image1,
  },
  {
    name: "Morocco vs Spain",
    description:
      "keeper Bono saved two, while Abdelhamid Sabiri, Hakim Ziyech and Achraf Hakimi scored their spot-kicks to send Spain out and Morocco into the next round, where Portugal or Switzerland await, ",
    image: image2,
  },
  {
    name: "Morocco vs Belgium",
    image: image3,
  },
  {
    name: "Morocco vs Brazil",
    description:
      "Sofiane Boufal and Abdelhamid Sabiri scored to give Morocco a 2-1 friendly win over Brazil in Tangier on Saturday, earning their first victory against the five-time world champions.",
    image: image4,
  },
  {
    name: "Afcon u23",
    image: image5,
  },
  {
    name: "Morocco vs Spain",
    description:
      "Great performance by azzedine Ounahi. The number eight did not stop running and stopping any dangerous action on the part of the Spanish team.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="morocco" className="w-full bg-color-blueDark py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Morocco)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>THE MOROCCAN NATIONAL TEAM</HText>
            <p className="py-5">
              Our illustrious Moroccan national team has achieved remarkable
              milestones throughout its history, making us proud and inspiring
              football fans worldwide. Here are some memorable achievements
              captured in captivating pictures :
            </p>
          </div>
        </motion.div>
        <div className="tableScroll mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
