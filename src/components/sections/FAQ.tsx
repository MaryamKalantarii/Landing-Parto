import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import Accordion from "../ui/Accordion";
import { faqs } from "../../data/faqs";

export default function FAQ() {
  return (
    <section id="faq" className="bg-ivory py-14">
      <Container className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
        <Reveal>
          <h2 data-reveal className="text-2xl font-bold md:text-[28px]">سوالات متداول</h2>
        </Reveal>
        <Reveal>
          <div data-reveal>
            <Accordion items={faqs} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
