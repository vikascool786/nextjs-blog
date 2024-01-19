import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
       <Head>
        <title>Contact us</title>
        <meta name='name' content='send me your messages.' />
      </Head>
      <ContactForm />
    </Fragment>
  )
}
