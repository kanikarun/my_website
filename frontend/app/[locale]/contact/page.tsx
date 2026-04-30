import { Contact } from "@/modules/contact";
import { Metadata } from "next";
export async function ContactPage() {
  return <Contact />;
}

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with OneWorld Software, a leading software development company in Cambodia. Contact us for web and mobile app development services.",
};

export default ContactPage;
