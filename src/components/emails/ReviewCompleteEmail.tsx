import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL ? `${process.env.VERCEL_URL}` : "";

export const ReviewCompleteEmail = () => (
  <Html>
    <Head />
    <Preview>You got some ivy-league potential!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://i.ibb.co/yS6P9v0/blue-no-bg.png`}
            width="100"
            alt="Ivyfy"
          />
          <Hr style={hr} />
          <Text style={paragraph}>
            We&apos;ve reviewed your application and have some feedback for you!
          </Text>
          <Text style={paragraph}>
            You can view your feedback on your dashboard. We hope it helps you
            get into your dream school!
          </Text>
          <Button style={button} href="https://app.ivyfy.me">
            See your Feedback
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>
            If you have any questions or concerns, feel free to respond to this
            email.
          </Text>
          <Text style={paragraph}>— The Ivyfy team</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Ivyfy, 42075 Loudoun Academy Dr, Leesburg, VA 20175
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ReviewCompleteEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#004684",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
